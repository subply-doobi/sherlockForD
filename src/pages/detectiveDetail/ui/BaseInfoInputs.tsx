import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../app/store/reduxStore';
import {useRef} from 'react';
import {Col} from '../../../shared/ui/styledComponents';
import SquareInput from '../../../widgets/inputs/SquareInput';
import {setValue} from '../../../features/userInputSlice';

const BaseInfoInputs = () => {
  // redux
  const {businessNm, representative, address, contact, career, introduction} =
    useSelector((state: RootState) => state.userInput);
  const dispatch = useDispatch();

  // useRef
  const manualRefs = useRef<any>([]);
  return (
    <Col>
      <SquareInput
        label="업체명"
        value={businessNm.value}
        onChangeText={v => dispatch(setValue({name: 'businessNm', value: v}))}
        errMsg={businessNm.errMsg}
        inputStyle="line"
        onSubmitEditing={() => manualRefs.current[0].focus()}
      />
      <SquareInput
        label="대표자명"
        value={representative.value}
        onChangeText={v =>
          dispatch(setValue({name: 'representative', value: v}))
        }
        errMsg={representative.errMsg}
        inputStyle="line"
        onSubmitEditing={() => manualRefs.current[1].focus()}
        ref={el => {
          manualRefs ? (manualRefs.current[0] = el) : null;
        }}
        boxStyle={{marginTop: 20}}
      />
      <SquareInput
        label="주소"
        value={address.value}
        onChangeText={v => dispatch(setValue({name: 'address', value: v}))}
        errMsg={address.errMsg}
        inputStyle="line"
        onSubmitEditing={() => manualRefs.current[2].focus()}
        ref={el => {
          manualRefs ? (manualRefs.current[1] = el) : null;
        }}
        boxStyle={{marginTop: 20}}
      />
      <SquareInput
        label="연락처"
        value={contact.value}
        onChangeText={v => dispatch(setValue({name: 'contact', value: v}))}
        errMsg={contact.errMsg}
        inputStyle="line"
        keyboardType="numeric"
        maxLength={13}
        ref={el => {
          manualRefs ? (manualRefs.current[2] = el) : null;
        }}
        boxStyle={{marginTop: 20}}
      />
    </Col>
  );
};

export default BaseInfoInputs;
