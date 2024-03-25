import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../shared/colors';
import {TextMain} from '../../shared/ui/styledComponents';

interface ISmallButton extends TouchableOpacityProps {
  btnStyle: 'cta' | 'line' | 'inactive';
  btnText: string;
  btnWidth?: number;
  btnHeight?: number;
  textColor?: string;
}
const SmallButton = (props: ISmallButton) => {
  return (
    <Button {...props}>
      <ButtonText btnStyle={props.btnStyle}>{props.btnText}</ButtonText>
    </Button>
  );
};

export default SmallButton;

interface IButton {
  btnStyle: 'cta' | 'line' | 'inactive';
  btnWidth?: number;
  btnHeight?: number;
}
const Button = styled.TouchableOpacity<IButton>`
  width: ${({btnWidth}) => (btnWidth ? btnWidth : 82)}px;
  height: ${({btnHeight}) => (btnHeight ? btnHeight : 32)}px;
  background-color: ${({btnStyle}) =>
    btnStyle === 'cta'
      ? colors.main
      : btnStyle === 'line'
      ? colors.white
      : colors.lightGrey};
  border-radius: 8px;
  border-color: ${colors.lineLight};
  border-width: ${({btnStyle}) => (btnStyle === 'line' ? 1 : 0)}px;

  justify-content: center;
  align-items: center;
`;

interface IButtonText {
  btnStyle: 'cta' | 'line' | 'inactive';
  textColor?: string;
}
const ButtonText = styled(TextMain)<IButtonText>`
  font-size: 13px;
  color: ${({btnStyle, textColor}) =>
    textColor
      ? textColor
      : btnStyle === 'cta'
      ? colors.white
      : btnStyle === 'inactive'
      ? colors.textGrey
      : colors.black};
  line-height: 20px;
`;
