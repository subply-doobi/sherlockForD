import styled from 'styled-components/native';
import {colors} from './colors';

// fonts
// TBD : ios 폰트적용시 font-family 확인 필요
export const TextJuliusSansOne = styled.Text`
  font-family: 'JuliusSansOne-Regular';
  include-font-padding: false;
  font-size: 40px;
  color: ${colors.black};
`;

export const TextAppleLiGothic = styled.Text`
  font-family: 'AppleLiGothicMedium';
  include-font-padding: false;
  font-size: 40px;
  color: ${colors.black};
`;

export const TextMain = styled.Text`
  /* font-family: 'NotoSansKR'; */
  include-font-padding: false;
  color: ${colors.black};
`;
export const TextSub = styled.Text`
  /* font-family: 'NotoSansKR'; */
  include-font-padding: false;
  color: ${colors.textGrey};
`;

// components
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Col = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface IHorizontalline {
  color?: string;
  thickness?: number;
  length?: number;
}
export const HorizontalLine = styled.View<IHorizontalline>`
  width: ${({length}) => (length ? `${length}px` : '100%')};
  height: ${({thickness}) => (thickness ? `${thickness}px` : '1px')};
  background: ${({color}) => (color ? color : colors.line)};
`;

interface ISpace {
  height?: number;
  width?: number;
}
export const Space = styled.View<ISpace>`
  width: ${({width}: ISpace) => (width ? `${width}px` : '100%')};
  height: ${({height}: ISpace) => (height ? `${height}px` : '16px')};
`;
