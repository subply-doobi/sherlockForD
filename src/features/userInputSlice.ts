import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {commaToNum, formatPhone} from '../shared/utils/format';
import {validateInput} from '../shared/utils/validation';

export interface IUserInputState {
  // login
  loginId: {value: string; isValid: boolean; errMsg: string};
  loginPw: {value: string; isValid: boolean; errMsg: string};

  // signUp
  signUpId: {value: string; isValid: boolean; errMsg: string};
  signUpPw: {value: string; isValid: boolean; errMsg: string};
  signUpPwCheck: {value: string; isValid: boolean; errMsg: string};

  // contractEdit
  amendation: {value: string; isValid: boolean; errMsg: string};
  advance: {value: string; isValid: boolean; errMsg: string};
  fee: {value: string; isValid: boolean; errMsg: string};

  // detectiveDetailEdit
  businessNm: {value: string; isValid: boolean; errMsg: string};
  representative: {value: string; isValid: boolean; errMsg: string};
  address: {value: string; isValid: boolean; errMsg: string};
  contact: {value: string; isValid: boolean; errMsg: string};
  area: {value: string; isValid: boolean; errMsg: string};
  field: {value: string; isValid: boolean; errMsg: string};
  intoduction: {value: string; isValid: boolean; errMsg: string};
}

const initialState: IUserInputState = {
  // login
  loginId: {value: '', isValid: true, errMsg: ''},
  loginPw: {value: '', isValid: true, errMsg: ''},

  // signUp
  signUpId: {value: '', isValid: false, errMsg: ''},
  signUpPw: {value: '', isValid: false, errMsg: ''},
  signUpPwCheck: {value: '', isValid: false, errMsg: ''},

  // contractEdit
  advance: {value: '', isValid: false, errMsg: ''},
  fee: {value: '', isValid: false, errMsg: ''},
  amendation: {value: '', isValid: false, errMsg: ''},

  // detectiveDetailEdit
  businessNm: {value: '', isValid: false, errMsg: ''},
  representative: {value: '', isValid: false, errMsg: ''},
  address: {value: '', isValid: false, errMsg: ''},
  contact: {value: '', isValid: false, errMsg: ''},
  area: {value: '', isValid: false, errMsg: ''},
  field: {value: '', isValid: false, errMsg: ''},
  intoduction: {value: '', isValid: false, errMsg: ''},
};

export const userInputSlice = createSlice({
  name: 'userInput',
  initialState,
  reducers: {
    setValue: (
      state,
      action: PayloadAction<{
        name: keyof IUserInputState;
        value: string;
      }>,
    ) => {
      const name = action.payload.name;
      const value =
        name === 'contact'
          ? formatPhone(action.payload.value)
          : name === 'advance' || name === 'fee'
          ? commaToNum(action.payload.value)
          : action.payload.value;

      // validation
      if (name === 'signUpPwCheck') {
        const {isValid, errMsg} = validateInput[name](
          value,
          state.signUpPw.value,
        );
        state[name].isValid = isValid;
        state[name].errMsg = errMsg;
        state[name].value = value;
        return;
      }

      const {isValid, errMsg} = validateInput[name](value);
      state[name].isValid = isValid;
      state[name].errMsg = errMsg;
      state[name].value = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setValue} = userInputSlice.actions;

export default userInputSlice.reducer;
