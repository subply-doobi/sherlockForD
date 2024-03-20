import {ComponentProps, forwardRef} from 'react';
import {StyleProp, TextInput, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../app/styles/colors';
import {TextMain, TextSub} from '../../app/styles/styledComponents';

interface ISquareInput extends ComponentProps<typeof TextInput> {
  label: string;
  boxStyle?: StyleProp<ViewStyle>;
  errMsg?: string;
}
const SquareInput = forwardRef((props: ISquareInput, ref) => {
  const {boxStyle, label, errMsg, ...inputProps} = props;
  return (
    <Box style={boxStyle}>
      <Label>{label}</Label>
      <Input
        style={{
          height: inputProps.multiline ? 160 : 40,
          textAlignVertical: inputProps.multiline ? 'top' : 'center',
        }}
        placeholderTextColor={colors.textGrey}
        ref={ref}
        {...inputProps}
      />
      {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
    </Box>
  );
});

export default SquareInput;

const Box = styled.View`
  width: 100%;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: ${colors.lightGrey};
  border-radius: 6px;

  font-size: 15px;
  include-font-padding: false;
  color: ${colors.textGrey};
  line-height: 22px;

  margin-top: 8px;
  padding-bottom: 9px;
  padding-left: 12px;
`;

const Label = styled(TextMain)`
  font-size: 13px;
  font-weight: bold;
  margin-left: 4px;
`;

const ErrorMsg = styled(TextSub)`
  font-size: 11px;
  margin: 6px 0px 0px 12px;
`;
