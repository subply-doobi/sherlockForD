import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {
  Col,
  Container,
  HorizontalLine,
  Icon,
  Row,
  Space,
  TextMain,
  TextSub,
} from '../../shared/ui/styledComponents';
import {icons} from '../../shared/iconSource';
import {colors} from '../../shared/colors';
import {SHADOW_STYLE} from '../../shared/constants';
import SmallButton from '../../widgets/buttons/SmallButton';

const Mypage = () => {
  const {navigate} = useNavigation();
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: getTodo,
        variables: {id: '123'},
        authMode: 'apiKey',
      });
      console.log('todoData:', todoData);
    } catch (err) {
      console.log('error fetching todos', err);
    }
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{paddingBottom: 64}}>
        {/* 상단 프로필 카드 */}
        <ProfileCard>
          <Row
            style={{
              width: '100%',
              height: 130,
              alignItems: 'center',
            }}>
            <ProfileImg />
            <Col style={{flex: 1, padding: 16}}>
              <Badge>
                <BadgeText>탐정</BadgeText>
              </Badge>
              <DetectiveNm numberOfLines={2} ellipsizeMode="tail">
                홈즈탐정법인
              </DetectiveNm>
              <CStatus>
                <CStatusText>인증필요</CStatusText>
              </CStatus>
            </Col>
          </Row>

          <Row style={{marginTop: 8, columnGap: 20}}>
            <SmallButton
              btnText="프로필 관리"
              btnStyle="line"
              style={{flex: 1}}
            />
            <SmallButton btnText="인증하기" btnStyle="line" style={{flex: 1}} />
          </Row>
        </ProfileCard>

        <HorizontalLine thickness={8} color={colors.lightGrey2} />

        {/* 서비스이용약관 - 개인정보처리방침 */}
        <ListBtnBox>
          <ListBtn onPress={() => console.log('서비스이용약관')}>
            <ListBtnText>서비스이용약관</ListBtnText>
            <Icon source={icons.chevron_right_24} />
          </ListBtn>
          <ListBtn onPress={() => console.log('서비스이용약관')}>
            <ListBtnText>개인정보처리방침</ListBtnText>
            <Icon source={icons.chevron_right_24} />
          </ListBtn>
        </ListBtnBox>

        {/* 이용정책 - 공지사항 - 로그아웃 */}
        <RowBtnBox>
          <RowBtn onPress={() => console.log('이용정책')}>
            <RowBtnText>이용정책</RowBtnText>
          </RowBtn>
          <RowBtn onPress={() => console.log('공지사항')}>
            <RowBtnText>공지사항</RowBtnText>
          </RowBtn>
          <RowBtn onPress={() => console.log('로그아웃')}>
            <RowBtnText style={{color: colors.red}}>로그아웃</RowBtnText>
          </RowBtn>
        </RowBtnBox>

        <HorizontalLine
          thickness={8}
          color={colors.grey}
          style={{marginTop: 16}}
        />
        {/* 고객센터 */}
        <ContactBox>
          <ContactTitle>고객센터</ContactTitle>
          <Space height={6} />
          <ContactText>
            운영시간: 10:00 ~ 18:00 (토, 일 공휴일 휴무)
          </ContactText>
          <ContactText>점심시간: 평일 13:00 ~ 14:00</ContactText>
        </ContactBox>

        {/* 자주묻는질문 - 1:1문의 */}
        <Row style={{marginTop: 40, paddingHorizontal: 16, columnGap: 20}}>
          <SmallButton
            btnText="자주묻는질문"
            btnStyle="line"
            style={{flex: 1}}
          />
          <SmallButton btnText="1:1문의" btnStyle="line" style={{flex: 1}} />
        </Row>
      </ScrollView>
    </Container>
  );
};

export default Mypage;

const ProfileCard = styled.View`
  height: 216px;
  width: 100%;
  padding: 0px 24px;
`;

const ProfileImg = styled.Image`
  width: 100px;
  height: 100px;
  background-color: ${colors.lightGrey};
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const Badge = styled.View`
  width: 48px;
  height: 16px;
  background-color: ${colors.orange};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const BadgeText = styled(TextMain)`
  font-size: 10px;
  color: ${colors.white};
`;

const DetectiveNm = styled(TextMain)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 8px;
  line-height: 24px;
`;

const CStatus = styled.View`
  width: 60px;
  height: 20px;
  border-radius: 8px;
  border-color: ${colors.black};
  border-width: 1px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const CStatusText = styled(TextMain)`
  font-size: 10px;
`;

const ListBtnBox = styled.View`
  width: 100%;
  margin-top: 24px;
`;

const ListBtn = styled.TouchableOpacity`
  height: 58px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const ListBtnText = styled(TextMain)`
  font-size: 16px;
  font-weight: bold;
`;

const RowBtnBox = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
  margin-top: 72px;
`;

const RowBtn = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const RowBtnText = styled(TextMain)`
  font-size: 12px;
`;

const ContactBox = styled.View`
  width: 100%;
  padding: 0 16px;
`;

const ContactTitle = styled(TextMain)`
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
`;

const ContactText = styled(TextSub)`
  font-size: 10px;
`;
