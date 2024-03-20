import {View, Text, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../app/styles/colors';
import {TextMain} from '../../app/styles/styledComponents';

interface ISmallButton extends TouchableOpacityProps {
  btnText: string;
  textColor?: string;
}
const SmallButton = (props: ISmallButton) => {
  return (
    <Button {...props}>
      <ButtonText style={{color: props.textColor}}>{props.btnText}</ButtonText>
    </Button>
  );
};

export default SmallButton;

const Button = styled.TouchableOpacity`
  width: 82px;
  height: 28px;
  background-color: ${colors.black};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(TextMain)`
  font-size: 13px;
  color: ${colors.white};
  line-height: 20px;
`;
