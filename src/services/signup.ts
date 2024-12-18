import { SignUpErrorType, SignUpUser, userEmailCheck } from "@/type/UserType";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleEmail = (
  e: ChangeEvent<HTMLInputElement>,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setSignUpUser: Dispatch<SetStateAction<SignUpUser>>,
  signUpUser: SignUpUser,
  error: SignUpErrorType
) => {
  if (e.target.value === "") {
    setError({
      ...error,
      email: "",
    });
  }

  if (e.target.value.length !== 0) {
    setError({
      ...error,
      email: "",
    });
  }

  setSignUpUser({
    ...signUpUser,
    request_data: {
      ...signUpUser.request_data,
      email: e.target.value,
    },
  });
};

export const handlePassword = (
  e: ChangeEvent<HTMLInputElement>,
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setSignUpUser: Dispatch<SetStateAction<SignUpUser>>,
  signUpUser: SignUpUser
) => {
  if (e.target.value === "") {
    setError({
      ...error,
      password: "",
    });
  }

  if (e.target.value.length !== 0) {
    setError({
      ...error,
      password: "",
    });
  }

  setSignUpUser({
    ...signUpUser,
    request_data: {
      ...signUpUser.request_data,
      password: e.target.value,
    },
  });
};

export const handlePassword1 = (
  e: ChangeEvent<HTMLInputElement>,
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setCheckedPassword: Dispatch<SetStateAction<string>>
) => {
  if (e.target.value === "") {
    setError({
      ...error,
      password1: "",
    });
  }

  if (e.target.value.length !== 0) {
    setError({
      ...error,
      password1: "",
    });
  }
  setCheckedPassword(e.target.value);
};

export const handleName = (
  e: ChangeEvent<HTMLInputElement>,
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setSignUpUser: Dispatch<SetStateAction<SignUpUser>>,
  signUpUser: SignUpUser
) => {
  if (e.target.value === "") {
    setError({
      ...error,
      name: "",
    });
  }

  if (e.target.value.length !== 0) {
    setError({
      ...error,
      name: "",
    });
  }
  setSignUpUser({
    ...signUpUser,
    request_data: {
      ...signUpUser.request_data,
      name: e.target.value,
    },
  });
};

export const handleNickname = (
  e: ChangeEvent<HTMLInputElement>,
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setSignUpUser: Dispatch<SetStateAction<SignUpUser>>,
  signUpUser: SignUpUser
) => {
  if (e.target.value === "") {
    setError({
      ...error,
      nickname: "",
    });
  }

  if (e.target.value.length !== 0) {
    setError({
      ...error,
      nickname: "",
    });
  }
  setSignUpUser({
    ...signUpUser,
    request_data: {
      ...signUpUser.request_data,
      nickname: e.target.value,
    },
  });
};

export const handleGender = (
  gender: string,
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setSignUpUser: Dispatch<SetStateAction<SignUpUser>>,
  signUpUser: SignUpUser
) => {
  if (gender !== "") {
    setError({
      ...error,
      gender: "",
    });
  }

  setSignUpUser({
    ...signUpUser,
    request_data: {
      ...signUpUser.request_data,
      gender,
    },
  });
};
export const handlePhone = (
  e: ChangeEvent<HTMLInputElement>,
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setSignUpUser: Dispatch<SetStateAction<SignUpUser>>,
  signUpUser: SignUpUser
) => {
  if (e.target.value === "") {
    setError({
      ...error,
      phoneNumber: "",
    });
  }

  if (e.target.value.length !== 0) {
    setError({
      ...error,
      phoneNumber: "",
    });
  }

  setSignUpUser({
    ...signUpUser,
    request_data: {
      ...signUpUser.request_data,
      contact: e.target.value,
    },
  });
};

export const handleDate = (
  e: ChangeEvent<HTMLInputElement>,
  setUseDate: Dispatch<SetStateAction<string>>,
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  setSignUpUser: Dispatch<SetStateAction<SignUpUser>>,
  signUpUser: SignUpUser
) => {
  setUseDate(e.target.value);
  const dateValue = e.target.value;
  if (e.target.value === "") {
    setError({
      ...error,
      age: "",
    });
  }

  if (e.target.value.length !== 0) {
    setError({
      ...error,
      age: "",
    });
  }
  const formattedDate = dateValue.replace(/-/g, ""); // 'yyyy-MM-dd' -> 'yyyyMMdd'
  const numericDate = parseInt(formattedDate, 10);

  setSignUpUser({
    ...signUpUser,
    request_data: {
      ...signUpUser.request_data,
      age: numericDate,
    },
  });
};

export const handleError = (
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  signUpUser: SignUpUser,
  checkedPassword: string
) => {
  const emailRegEx =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  const nicknameRegEx = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;
  const phoneRegEx = /^01([0])-?([0-9]{4})-([0-9]{4})$/;
  if (signUpUser.request_data.email === "") {
    setError({
      ...error,
      email: "이메일을 입력해주세요.",
    });
    return true;
  }
  if (!emailRegEx.test(signUpUser.request_data.email)) {
    setError({
      ...error,
      email: "이메일 형식이 올바르지 않습니다.",
    });
    return true;
  }

  if (signUpUser.request_data.password === "") {
    setError({
      ...error,
      password: "비밀번호를 입력해주세요.",
    });
    return true;
  }

  if (!passwordRegEx.test(signUpUser.request_data.password)) {
    setError({
      ...error,
      password: "비밀번호는 8~15자리의 영문, 숫자, 특수문자 조합이어야 합니다.",
    });
    return true;
  }

  if (checkedPassword === "") {
    setError({
      ...error,
      password1: "비밀번호를 입력해주세요.",
    });
    return true;
  }

  if (signUpUser.request_data.password !== checkedPassword) {
    setError({
      ...error,
      password1: "비밀번호가 일치하지 않습니다.",
    });
    return true;
  }

  if (signUpUser.request_data.name === "") {
    setError({
      ...error,
      name: "이름을 입력해주세요.",
    });
    return true;
  }

  if (signUpUser.request_data.name.length < 2) {
    setError({
      ...error,
      name: "이름을 2자 이상 입력해주세요.",
    });
    return true;
  }

  if (signUpUser.request_data.nickname === "") {
    setError({
      ...error,
      nickname: "닉네임을 입력해주세요.",
    });
    return true;
  }

  if (signUpUser.request_data.nickname.length < 2) {
    setError({
      ...error,
      nickname: "닉네임을 2자 이상 입력해주세요.",
    });
    return true;
  }

  if (!nicknameRegEx.test(signUpUser.request_data.nickname)) {
    setError({
      ...error,
      nickname: "닉네임은 한글, 영문, 숫자만 입력 가능합니다.",
    });
    return true;
  }

  if (signUpUser.request_data.gender === "") {
    setError({
      ...error,
      gender: "성별을 선택해주세요.",
    });
    return true;
  }

  if (signUpUser.request_data.contact === "") {
    setError({
      ...error,
      phoneNumber: "휴대폰 번호를 입력해주세요.",
    });
    return true;
  }

  if (!phoneRegEx.test(signUpUser.request_data.contact)) {
    setError({
      ...error,
      phoneNumber: "휴대폰 번호 형식이 올바르지 않습니다.",
    });
    return true;
  }

  if (signUpUser.request_data.age === 0) {
    setError({
      ...error,
      age: "생년월일을 입력해주세요.",
    });
    return true;
  }

  if (
    !signUpUser.term_data[0] ||
    !signUpUser.term_data[1] ||
    !signUpUser.term_data[2]
  ) {
    setError({
      ...error,
      checked1: "필수 항목에 동의해주세요.",
    });
    return true;
  }
  return false;
};

export const handleEmailCheck = (
  error: SignUpErrorType,
  setError: Dispatch<SetStateAction<SignUpErrorType>>,
  signUpUser: SignUpUser,
  setIsEmailChecked: Dispatch<SetStateAction<boolean>>,
  emailCheck: UseMutateFunction<
    AxiosResponse<any, any>,
    Error,
    userEmailCheck,
    unknown
  >,
  setEmailCodeInput: Dispatch<SetStateAction<boolean>>
) => {
  const emailRegEx =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (signUpUser.request_data.email === "")
    return alert("이메일을 입력해주세요.");
  if (!emailRegEx.test(signUpUser.request_data.email)) {
    setError({
      ...error,
      email: "이메일 형식이 올바르지 않습니다.",
    });
    return;
  }
  setIsEmailChecked(true);
  emailCheck(
    { email: signUpUser.request_data.email },
    {
      onSuccess: () => {
        setIsEmailChecked(false);
        setEmailCodeInput(true);
      },
      onError: (data: any) => {
        if (data.response.data.detail === "Email already registered") {
          alert("이미 가입된 이메일입니다.");
        }
        setIsEmailChecked(false);
      },
    }
  );
};
