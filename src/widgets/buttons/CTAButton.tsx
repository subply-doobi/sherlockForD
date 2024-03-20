import {View, Text, StyleProp} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {TextMain} from '../../app/styles/styledComponents';
import {colors} from '../../app/styles/colors';

interface ICTAButton {
  title: string;
  btnStyle: 'active' | 'inactive' | 'line';
  onPress: () => void;
  style?: StyleProp<any>;
}
const CTAButton = ({title, btnStyle, onPress, style}: ICTAButton) => {
  const bgColor =
    btnStyle === 'active'
      ? colors.black
      : btnStyle === 'inactive'
      ? colors.lightGrey
      : colors.white;
  const lineStyle =
    btnStyle === 'line' ? {borderWidth: 1, borderColor: colors.black} : {};
  const textColor = btnStyle === 'line' ? colors.black : colors.white;

  return (
    <Button
      style={{
        backgroundColor: bgColor,
        ...lineStyle,
        ...style,
      }}
      onPress={onPress}>
      <ButtonText style={{color: textColor}}>{title}</ButtonText>
    </Button>
  );
};

export default CTAButton;

const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: #000;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(TextMain)`
  font-size: 16px;
`;
