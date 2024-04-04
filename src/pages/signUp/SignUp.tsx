import {View, Text} from 'react-native';
import {Col, Container} from '../../shared/ui/styledComponents';
import SquareInput from '../../widgets/inputs/SquareInput';
import {useEffect, useRef, useState} from 'react';
import CTAButton from '../../widgets/buttons/CTAButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store/reduxStore';
import {setValue} from '../../features/userInputSlice';
import SmallButton from '../../widgets/buttons/SmallButton';
import {generateClient} from 'aws-amplify/api';
import {
  getContract,
  listContractDetails,
  getContractDetail,
  listContracts,
} from '../../graphql/queries';
import {createContract, createContractDetail} from '../../graphql/mutations';

const client = generateClient();

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

  // api test functions

  // createContract
  const createContractTest = async () => {
    try {
      const contractData = await client.graphql({
        query: createContract,
        variables: {
          input: {
            Date: '2022-09-08',
            Client: '섭섭',
            Field: 'field',
            Purpose: 'purpose',
            Option: 'option',
            Advance: '10000',
            Fee: '20000',
            Refund: '30000',
            Total: '60000',
            DetectiveSign: 'detectiveSign',
            ClientSign: 'clientSign',
            id: '섭섭',
          },
        },
      });
      console.log('createContract:', contractData);
    } catch (err) {
      console.log('error creating contract', err);
    }
  };

  // createContractDetail
  const createContractDetailTest = async () => {
    try {
      const contractData = await client.graphql({
        query: createContractDetail,
        variables: {
          input: {
            status: 'status',
            ContractID: '섭섭',
          },
        },
      });
      console.log('createContractDetail:', contractData);
    } catch (err) {
      console.log('error creating contractDetail', err);
    }
  };

  // listContracts
  const listContractsTest = async () => {
    try {
      const contractData = await client.graphql({
        query: listContracts,
      });
      console.log('listContracts:', contractData.data.listContracts.items);
    } catch (err) {
      console.log('error fetching contracts', err);
    }
  };

  // listContractDetails
  const listContractDetailsTest = async () => {
    try {
      const contractData = await client.graphql({
        query: listContractDetails,
      });
      console.log(
        'listContractDetails:',
        contractData.data.listContractDetails.items,
      );
    } catch (err) {
      console.log('error fetching contractDetails', err);
    }
  };

  useEffect(() => {
    // createContractTest();
    // createContractDetailTest();
    listContractsTest();
    // listContractDetailsTest();
  }, []);
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
