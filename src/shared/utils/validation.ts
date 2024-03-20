import {REGEX_PHONE} from '../constants';

interface IValidateInput {
  [key: string]: (
    v: string,
    v2?: string,
  ) => {
    isValid: boolean;
    errMsg: string;
  };
}
export const validateInput: IValidateInput = {
  // login
  loginId: (v: string) => {
    if (!v)
      return {
        isValid: true,
        errMsg: '',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  loginPw: (v: string) => {
    if (!v)
      return {
        isValid: true,
        errMsg: '',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  // signUp
  signUpId: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '아이디를 입력해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  signUpPw: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '비밀번호를 입력해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  signUpPwCheck: (v: string, v2: string | undefined) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '비밀번호를 입력해주세요',
      };
    if (v !== v2)
      return {
        isValid: false,
        errMsg: '비밀번호가 일치하지 않습니다',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  // contractEdit
  amendation: (v: string) => {
    if (!v)
      return {
        isValid: true,
        errMsg: '',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  advance: (v: string) => {
    if (!v)
      return {
        isValid: true,
        errMsg: '',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  fee: (v: string) => {
    console.log(v, v.replace(/,/g, ''));
    if (!v)
      return {
        isValid: false,
        errMsg: '수임료를 입력해주세요',
      };
    if (!parseInt(v.replace(/,/g, '')) || parseInt(v.replace(/,/g, '')) <= 0)
      return {
        isValid: false,
        errMsg: '수임료를 정확히 입력해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  // detectiveDetailEdit
  businessNm: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '업체명을 입력해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  representative: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '대표자명을 입력해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  address: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '주소를 입력해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  contact: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '연락처를 입력해주세요',
      };
    if (!REGEX_PHONE.test(v))
      return {
        isValid: false,
        errMsg: '연락처를 정확히 입력해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  area: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '지역을 선택해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  field: (v: string) => {
    if (!v)
      return {
        isValid: false,
        errMsg: '전문분야를 선택해주세요',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
  intoduction: (v: string) => {
    if (!v)
      return {
        isValid: true,
        errMsg: '',
      };
    return {
      isValid: true,
      errMsg: '',
    };
  },
};
