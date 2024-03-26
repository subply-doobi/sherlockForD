import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../app/store/reduxStore';
import {Col, Icon, Row, TextMain} from '../../../shared/ui/styledComponents';
import SquareInput from '../../../widgets/inputs/SquareInput';
import {setValue} from '../../../features/userInputSlice';
import React, {SetStateAction, useState} from 'react';
import CTAButton from '../../../widgets/buttons/CTAButton';
import styled from 'styled-components/native';
import {icons} from '../../../shared/iconSource';

const onDelete = (
  index: number,
  setCareerList: React.Dispatch<SetStateAction<string[]>>,
) => {
  setCareerList(v => v.filter((_, i) => i !== index));
};

const Career = () => {
  // redux
  const {career} = useSelector((state: RootState) => state.userInput);
  const dispatch = useDispatch();

  // useState
  const [careerList, setCareerList] = useState<string[]>([]);

  console.log(career);
  return (
    <Col style={{marginTop: 64}}>
      <CareerBox>
        {careerList.map((item, index) => (
          <Row key={index}>
            <CareerText>{item}</CareerText>
            <CancelBtn onPress={() => onDelete(index, setCareerList)}>
              <Icon size={24} source={icons.cancel_24} />
            </CancelBtn>
          </Row>
        ))}
      </CareerBox>
      <SquareInput
        label="상세경력/이력"
        value={career.value}
        onChangeText={v => dispatch(setValue({name: 'career', value: v}))}
        maxLength={50}
        inputStyle="line"
      />
      <CTAButton
        style={{marginTop: 20, height: 40}}
        btnStyle="line"
        title="+ 추가하기"
        onPress={() => {
          if (career.value === '') return;
          setCareerList(v => [...v, career.value]);
          dispatch(setValue({name: 'career', value: ''}));
        }}
      />
    </Col>
  );
};

export default Career;

const CareerBox = styled.View`
  width: 100%;
  padding: 16px 0px;
  row-gap: 8px;
`;
const CareerText = styled(TextMain)`
  flex: 1;
  font-size: 13px;
`;

const CancelBtn = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;
