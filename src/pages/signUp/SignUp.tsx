import {View, Text} from 'react-native';
import {Col, Container} from '../../app/styles/styledComponents';
import SquareInput from '../../widgets/inputs/SquareInput';
import {useRef, useState} from 'react';
import CTAButton from '../../widgets/buttons/CTAButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store/reduxStore';
import {setValue} from '../../features/userInputSlice';
import SmallButton from '../../widgets/buttons/SmallButton';

const SignUp = () => {
  // redux
  const {signUpId, signUpPw, signUpPwCheck} = useSelector(
    (state: RootState) => state.userInput,
  );
  const dispatch = useDispatch();

  // useState
  const [idDupCheck, setIdDupCheck] = useState(false);

  // useRef
  const manualRefs = useRef<any>([]);

  return (
    <Container style={{paddingHorizontal: 24}}>
      <Col>
        <SquareInput
          label="아이디"
          boxStyle={{marginTop: 22}}
          value={signUpId.value}
          errMsg={
            signUpId.errMsg ||
            (idDupCheck ? '사용가능한 아이디입니다' : '중복확인이 필요합니다')
          }
          onChangeText={v => dispatch(setValue({name: 'signUpId', value: v}))}
          placeholder="아이디를 입력해주세요"
          onSubmitEditing={() => manualRefs.current[0].focus()}
        />
        <SmallButton
          btnText="중복확인"
          style={{alignSelf: 'flex-end', marginTop: -8}}
          onPress={() => console.log('중복확인')}
        />
        <SquareInput
          label="비밀번호"
          boxStyle={{marginTop: 22}}
          value={signUpPw.value}
          errMsg={signUpPw.errMsg}
          onChangeText={v => dispatch(setValue({name: 'signUpPw', value: v}))}
          placeholder="8자이상 영문, 숫자, 특수문자 조합"
          secureTextEntry={true}
          ref={el => {
            manualRefs ? (manualRefs.current[0] = el) : null;
          }}
          onSubmitEditing={() => manualRefs.current[1].focus()}
        />

        <SquareInput
          label="비밀번호 확인"
          boxStyle={{marginTop: 22}}
          value={signUpPwCheck.value}
          errMsg={signUpPwCheck.errMsg}
          onChangeText={v =>
            dispatch(setValue({name: 'signUpPwCheck', value: v}))
          }
          placeholder="비밀번호를 한 번 더 입력해주세요."
          secureTextEntry={true}
          ref={el => {
            manualRefs ? (manualRefs.current[1] = el) : null;
          }}
        />
      </Col>
      <CTAButton
        title="셜록 가입하기"
        btnStyle="active"
        style={{position: 'absolute', bottom: 32, alignSelf: 'center'}}
        onPress={() => console.log('셜록 가입하기')}
      />
    </Container>
  );
};

export default SignUp;
