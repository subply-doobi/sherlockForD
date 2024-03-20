import React from 'react';
import styled from 'styled-components/native';
import SmallButton from './SmallButton';
import {useDispatch} from 'react-redux';
import {IUserInputState, setValue} from '../../features/userInputSlice';
import {colors} from '../../app/styles/colors';

const PRICE_BTNS = [
  {label: '1만원', price: 10000},
  {label: '10만원', price: 100000},
  {label: '100만원', price: 1000000},
  {label: '1,000만원', price: 10000000},
];
interface IPriceBtns {
  inputName: keyof IUserInputState;
  currentValue: string;
}
const PriceBtns = ({inputName, currentValue}: IPriceBtns) => {
  // redux
  const dispatch = useDispatch();

  // etc
  const handlePress = (price: number) => {
    console.log('PriceBtns handlePress', currentValue);
    if (!currentValue) {
      currentValue = '0';
    }
    const currentValueWithoutCommas = currentValue.replace(/,/g, '');
    dispatch(
      setValue({
        name: inputName,
        value: String(parseInt(currentValueWithoutCommas) + price),
      }),
    );
  };
  return (
    <Box>
      {PRICE_BTNS.map((btn, index) => (
        <SmallButton
          style={{
            width: 72,
            height: 36,
            backgroundColor: colors.white,
            borderColor: colors.lightGrey2,
            borderWidth: 1,
          }}
          key={index}
          btnText={btn.label}
          textColor={colors.line}
          onPress={() => handlePress(btn.price)}
        />
      ))}
    </Box>
  );
};

export default PriceBtns;

const Box = styled.View`
  width: 100%;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;
  padding: 16px 0px 0px 0px;
`;
