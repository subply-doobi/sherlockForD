import {ComponentProps, forwardRef} from 'react';
import {StyleProp, TextInput, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../shared/colors';
import {TextMain, TextSub} from '../../shared/ui/styledComponents';

interface ISquareInput extends ComponentProps<typeof TextInput> {
  label: string;
  boxStyle?: StyleProp<ViewStyle>;
  inputStyle?: 'fill' | 'line';
  errMsg?: string;
}
const SquareInput = forwardRef(
  (
    {label, boxStyle, errMsg, inputStyle = 'fill', ...props}: ISquareInput,
    ref,
  ) => {
    return (
      <Box style={boxStyle}>
        <Label>{label}</Label>
        <Input
          inputStyle={inputStyle}
          style={{
            height: props.multiline ? 160 : 40,
            textAlignVertical: props.multiline ? 'top' : 'center',
          }}
          placeholderTextColor={colors.textGrey}
          ref={ref}
          {...props}
        />
        {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
      </Box>
    );
  },
);

export default SquareInput;

const Box = styled.View`
  width: 100%;
`;

interface IInput {
  inputStyle: 'fill' | 'line';
}
const Input = styled.TextInput<IInput>`
  width: 100%;
  height: 40px;
  background-color: ${({inputStyle}) =>
    inputStyle === 'fill' ? colors.lightGrey : colors.white};
  border-radius: 6px;
  border-color: ${colors.black};
  border-width: ${({inputStyle}) => (inputStyle === 'line' ? 1 : 0)}px;

  font-size: 15px;
  include-font-padding: false;
  color: ${colors.textGrey};
  line-height: 20px;

  margin-top: 6px;
  padding-bottom: 9px;
  padding-left: 12px;
`;

const Label = styled(TextMain)`
  font-size: 13px;
  font-weight: bold;
  margin-left: 4px;
  line-height: 18px;
`;

const ErrorMsg = styled(TextSub)`
  font-size: 11px;
  margin: 6px 0px 0px 12px;
`;
