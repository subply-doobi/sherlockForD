import {View, Text, ScrollView} from 'react-native';
import {
  Col,
  Container,
  HorizontalLine,
  Row,
  Space,
  TextAppleLiGothic,
  TextJuliusSansOne,
  TextMain,
} from '../../shared/ui/styledComponents';
import styled from 'styled-components/native';
import CTAButton from '../../widgets/buttons/CTAButton';
import LineInput from '../../widgets/inputs/LineInput';
import {useState} from 'react';
import {colors} from '../../shared/colors';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <Container style={{alignItems: 'center', paddingHorizontal: 24}}>
      <ScrollView>
        <TitleBox>
          <Title1>SHERLOCK</Title1>
          <Title2>for</Title2>
          <Title2>detective</Title2>
        </TitleBox>
        <LineInput
          label="아이디"
          value={id}
          onChangeText={setId}
          boxStyle={{marginTop: 54}}
        />
        <LineInput
          boxStyle={{marginTop: 30}}
          label="비밀번호"
          value={pw}
          onChangeText={setPw}
          secureTextEntry={true}
        />
        <CTAButton
          btnStyle="line"
          onPress={() => console.log('로그인')}
          title="로그인"
          style={{marginTop: 44}}
        />

        <Space height={12} />
        <GuideText onPress={() => console.log('아이디/비밀번호찾기')}>
          아이디/비밀번호를 잊어버리셨나요?
        </GuideText>

        <FirstBox>
          <HorizontalLine color={colors.line} />
          <Col style={{position: 'absolute'}}>
            <GuideText style={{padding: 4, backgroundColor: colors.white}}>
              처음이신가요?
            </GuideText>
          </Col>
        </FirstBox>

        <CTAButton
          btnStyle="active"
          onPress={() => console.log('셜록 가입하기')}
          title="셜록 가입하기"
          style={{marginTop: 20}}
        />
      </ScrollView>
    </Container>
  );
};

export default Login;

const TitleBox = styled.View`
  margin-top: 64px;
  align-items: center;
  justify-content: center;
`;

const Title1 = styled(TextJuliusSansOne)`
  font-size: 64px;
  /* margin-top: 12px; */
`;

const Title2 = styled(TextAppleLiGothic)`
  font-size: 64px;
  /* margin-top: 12px; */
`;

const GuideText = styled(TextMain)`
  font-size: 11px;
  align-self: center;
`;

const FirstBox = styled.View`
  width: 100%;
  height: 22px;

  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;
