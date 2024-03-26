// 화면크기
import {Dimensions} from 'react-native';
import {colors} from './colors';

// get screen size
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// 핸드폰번호 정규식
export const REGEX_PHONE = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;

// shadow
export const SHADOW_STYLE = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  elevation: 4,
};
