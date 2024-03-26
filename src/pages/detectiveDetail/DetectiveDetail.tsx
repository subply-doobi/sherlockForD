import styled from 'styled-components/native';
import {Col, Container, TextMain} from '../../shared/ui/styledComponents';
import {ScrollView} from 'react-native';
import CTAButton from '../../widgets/buttons/CTAButton';
import {colors} from '../../shared/colors';
import {SCREEN_WIDTH} from '../../shared/constants';
import SquareInput from '../../widgets/inputs/SquareInput';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store/reduxStore';
import {setValue} from '../../features/userInputSlice';
import {useRef} from 'react';
import BaseInfoInputs from './ui/BaseInfoInputs';
import MultiSelects from './ui/MultiSelects';
import Career from './ui/Career';

const DetectiveDetail = () => {
  // redux
  const {businessNm, representative, address, contact, career, introduction} =
    useSelector((state: RootState) => state.userInput);
  const dispatch = useDispatch();

  // useRef
  const manualRefs = useRef<any>([]);

  return (
    <Container>
      <ScrollView contentContainerStyle={{paddingBottom: 64}}>
        <ProfileImgBtn onPress={() => console.log('프로필사진 추가')}>
          <OptionText>프로필 사진 첨부하기</OptionText>
        </ProfileImgBtn>

        <Col style={{padding: 24}}>
          {/* 업체명 - 대표자명 - 주소 - 연락처 */}
          <BaseInfoInputs />

          {/* 전문분야 - 활동지역 */}
          <MultiSelects />

          {/* 상세경력/이력 */}
          <Career />

          {/* 소개글 */}
          <SquareInput
            label="소개글"
            value={introduction.value}
            onChangeText={v =>
              dispatch(setValue({name: 'introduction', value: v}))
            }
            errMsg={introduction.errMsg}
            placeholder="300자 이내로 작성 가능합니다"
            maxLength={300}
            inputStyle="line"
            multiline={true}
            ref={el => {
              manualRefs ? (manualRefs.current[2] = el) : null;
            }}
            boxStyle={{marginTop: 58}}
          />
        </Col>
      </ScrollView>
      <CTAButton
        btnStyle="active"
        onPress={() => console.log('상세정보 저장')}
        title="저장하기"
        style={{marginBottom: 24, width: SCREEN_WIDTH - 48}}
      />
    </Container>
  );
};

export default DetectiveDetail;

const ProfileImgBtn = styled.TouchableOpacity`
  width: 100%;
  height: 288px;
  background-color: ${colors.grey};

  align-items: center;
  justify-content: center;
`;

const Label = styled(TextMain)`
  font-size: 14px;
  font-weight: bold;
`;

const OptionText = styled(TextMain)`
  font-size: 14px;
  line-height: 18px;
`;
