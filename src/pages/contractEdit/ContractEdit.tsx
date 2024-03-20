import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store/reduxStore';
import {Container} from '../../app/styles/styledComponents';
import SquareInput from '../../widgets/inputs/SquareInput';
import {setValue} from '../../features/userInputSlice';
import {useRef, useState} from 'react';
import PriceBtns from '../../widgets/buttons/PriceBtns';

const ContractEdit = () => {
  // redux
  const {amendation, advance, fee} = useSelector(
    (state: RootState) => state.userInput,
  );
  const dispatch = useDispatch();

  // useState
  const [isAdvanceInputActive, setIsAdvanceInputActive] = useState(false);
  const [isFeeInputActive, setIsFeeInputActive] = useState(false);

  // useRef
  const manualRefs = useRef<any>([]);

  return (
    <Container style={{paddingHorizontal: 16}}>
      <SquareInput
        label="추가/수정 사항"
        boxStyle={{marginTop: 22}}
        value={amendation.value}
        errMsg={amendation.errMsg}
        placeholder="신청서에서 수정이 필요한 내용이 있는 경우만 작성"
        multiline={true}
        onChangeText={v => dispatch(setValue({name: 'amendation', value: v}))}
        onSubmitEditing={() => manualRefs.current[0].focus()}
      />
      <SquareInput
        ref={el => {
          manualRefs ? (manualRefs.current[0] = el) : null;
        }}
        label="선금"
        boxStyle={{marginTop: 22}}
        value={advance.value}
        errMsg={advance.errMsg}
        placeholder=""
        keyboardType="numeric"
        onChangeText={v => dispatch(setValue({name: 'advance', value: v}))}
        onSubmitEditing={() => manualRefs.current[1].focus()}
        onFocus={() => setIsAdvanceInputActive(true)}
        onEndEditing={() => setIsAdvanceInputActive(false)}
      />
      {isAdvanceInputActive && (
        <PriceBtns currentValue={advance.value} inputName="advance" />
      )}
      <SquareInput
        ref={el => {
          manualRefs ? (manualRefs.current[1] = el) : null;
        }}
        label="수임료"
        boxStyle={{marginTop: 22}}
        value={fee.value}
        errMsg={fee.errMsg}
        placeholder=""
        keyboardType="numeric"
        onChangeText={v => dispatch(setValue({name: 'fee', value: v}))}
        onFocus={() => setIsFeeInputActive(true)}
        onEndEditing={() => setIsFeeInputActive(false)}
      />
      {isFeeInputActive && (
        <PriceBtns currentValue={fee.value} inputName="fee" />
      )}
    </Container>
  );
};

export default ContractEdit;
