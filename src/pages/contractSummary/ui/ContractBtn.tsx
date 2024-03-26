import styled from 'styled-components/native';
import {colors} from '../../../shared/colors';
import {
  Icon,
  Row,
  TextMain,
  TextSub,
} from '../../../shared/ui/styledComponents';
import {SCREEN_WIDTH} from '../../../shared/constants';
import {ImageSourcePropType, TouchableOpacityProps} from 'react-native';

interface IContractBtn extends TouchableOpacityProps {
  number: string;
  label: string;
  iconSource: ImageSourcePropType;
  btnStyle: 'blue' | 'grey' | 'border';
}
const ContractBtn = ({
  number,
  label,
  iconSource,
  btnStyle,
  ...props
}: IContractBtn) => {
  return (
    <Button btnStyle={btnStyle} {...props}>
      <Row>
        <Icon source={iconSource} resizeMode="contain" />
        <Label>{label}</Label>
      </Row>
      <Number>{parseInt(number) > 99 ? '99+' : number}</Number>
    </Button>
  );
};

export default ContractBtn;

interface IButton {
  btnStyle: 'blue' | 'grey' | 'border';
}
const Button = styled.TouchableOpacity<IButton>`
  background-color: ${({btnStyle}) =>
    btnStyle === 'blue'
      ? colors.blue
      : btnStyle === 'grey'
      ? colors.lightGrey
      : 'white'};
  height: 80px;
  width: 100%;
  flex-direction: row;
  border-width: ${({btnStyle}) => (btnStyle === 'border' ? 1 : 0)}px;
  border-radius: 8px;
  border-color: ${colors.lineLight};
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const Number = styled(TextMain)`
  font-weight: bold;
  font-size: 40px;
`;

const Label = styled(TextSub)`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  margin-left: 8px;
`;
