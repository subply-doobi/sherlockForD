import {StyleProp, ViewStyle, TextInput} from 'react-native';
import {styled} from 'styled-components/native';
import {colors} from '../../app/styles/colors';
import {TextMain} from '../../app/styles/styledComponents';
import {ComponentProps, forwardRef} from 'react';

interface ILineInput extends ComponentProps<typeof TextInput> {
  label: string;
  boxStyle?: StyleProp<ViewStyle>;
}
const LineInput = forwardRef((props: ILineInput, ref) => {
  const {
    boxStyle,
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  return (
    <Box style={boxStyle}>
      <Label>{label}</Label>
      <Input
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
      />
    </Box>
  );
});

export default LineInput;

const Box = styled.View`
  width: 100%;
`;

const Input = styled.TextInput`
  width: 100%;
  font-family: 'NotoSansKR';
  include-font-padding: false;
  font-size: 15px;
  color: ${colors.textGrey};

  padding-bottom: 0px;
  line-height: 22px;

  border-bottom-width: 1px;
  border-color: ${colors.black};
`;

const Label = styled(TextMain)`
  font-size: 11px;
  margin-bottom: -4px;
`;
