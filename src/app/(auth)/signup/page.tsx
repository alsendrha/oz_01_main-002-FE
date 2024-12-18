"use client";

import {
  useSignUpUser,
  useUserEmailCheck,
  useUserEmailCodeCheck,
  useUserNicknameCheck,
  useUserPhoneCheck,
} from "@/api/userApi";
import CheckButton from "@/components/signup/CheckButton";
import EmailLoading from "@/components/signup/EmailLoading";
import SignInput from "@/components/signup/SignInput";
import SignInputOne from "@/components/signup/SignInputOne";
import TermCheck from "@/components/signup/TermCheck";
import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import {
  handleDate,
  handleEmail,
  handleEmailCheck,
  handleError,
  handleGender,
  handleName,
  handleNickname,
  handlePassword,
  handlePassword1,
  handlePhone,
} from "@/services/signup";
import { SignUpErrorType, SignUpUser } from "@/type/UserType";
import { error } from "console";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Terms = {
  content: string;
  created_at: string;
  id: number;
  is_active: boolean;
  is_required: boolean;
  name: string;
  updated_at: string;
};

const SignUp = () => {
  const [gender, setGender] = useState("성별");
  const [isClicked, setIsClicked] = useState(false);
  const [terms, setTerms] = useState<Terms[]>([]);
  const [checkedPassword, setCheckedPassword] = useState("");
  const [useDate, setUseDate] = useState<string>("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const router = useRouter();
  const ref = useRef(null);
  const emailCheck = useUserEmailCheck();
  const nicknameCheck = useUserNicknameCheck();
  const phoneCheck = useUserPhoneCheck();
  const [signUpUser, setSignUpUser] = useState<SignUpUser>({
    request_data: {
      email: "",
      password: "",
      name: "",
      nickname: "",
      gender: "",
      contact: "",
      age: 0,
    },
    term_data: [],
  });
  const [error, setError] = useState<SignUpErrorType>({
    email: "",
    password: "",
    password1: "",
    name: "",
    nickname: "",
    gender: "",
    phoneNumber: "",
    age: "",
    checked1: "",
    checked2: "",
    checked3: "",
  });
  const genderOptions = [
    { id: 1, label: "남자", value: 1 },
    { id: 2, label: "여자", value: 2 },
  ];
  const [emailCode, setEmailCode] = useState<string | undefined>("");
  const [emailCodeInput, setEmailCodeInput] = useState(false);
  const [userChecked, setUserChecked] = useState({
    email: false,
    nickname: false,
    phone: false,
  });

  const emailCodeCheck = useUserEmailCodeCheck();
  const handleEmailCodeCheck = () => {
    emailCodeCheck(
      { email: signUpUser.request_data.email, code: Number(emailCode) },
      {
        onSuccess: () => {
          setUserChecked({
            ...userChecked,
            email: true,
          });
          setEmailCodeInput(false);
        },
      }
    );
  };

  const handleNickNameCheck = () => {
    if (signUpUser.request_data.nickname === "")
      return alert("닉네임을 입력해주세요.");
    nicknameCheck(
      { nickname: signUpUser.request_data.nickname },
      {
        onSuccess: () => {
          setUserChecked({
            ...userChecked,
            nickname: true,
          });
        },
      }
    );
  };

  const handlePhoneCheck = () => {
    if (signUpUser.request_data.contact === "")
      return alert("휴대폰 번호를 입력해주세요.");
    phoneCheck(
      { contact: signUpUser.request_data.contact },
      {
        onSuccess: () => {
          setUserChecked({
            ...userChecked,
            phone: true,
          });
        },
      }
    );
  };

  const userSignUp = useSignUpUser();
  const handleSignUpUser = () => {
    const errors = handleError(error, setError, signUpUser, checkedPassword);
    if (!errors) {
      if (
        userChecked.email === false ||
        userChecked.nickname === false ||
        userChecked.phone === false
      ) {
        alert("이메일, 닉네임, 휴대폰 인증을 완료해주세요.");
        return;
      }
      userSignUp(signUpUser);
    } else {
      return;
    }
  };

  useOnclickOutside(ref, () => {
    setIsClicked(false);
  });

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/");
    }

    if (signUpUser.request_data.contact.length === 11) {
      setSignUpUser({
        ...signUpUser,
        request_data: {
          ...signUpUser.request_data,
          contact: signUpUser.request_data.contact
            .replace(/-/g, "")
            .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
        },
      });
    }
  }, [signUpUser.request_data.contact]);

  return (
    <>
      <div className="bg-[#222] flex flex-col justify-center items-center">
        <div className="mt-[100px] mb-[80px] text-white text-[40px] leading-none">
          <p>회원가입</p>
        </div>
        <div className="w-full max-w-[518px] max-[560px]:max-w-[390px] mx-auto">
          <div className="flex items-center justify-between mb-[10px]">
            <SignInput
              type={"text"}
              placeholder={"이메일"}
              value={signUpUser.request_data.email}
              onChange={(e) =>
                handleEmail(e, setError, setSignUpUser, signUpUser, error)
              }
            />
            <CheckButton
              title={"이메일 확인"}
              onClick={() =>
                handleEmailCheck(
                  error,
                  setError,
                  signUpUser,
                  setIsEmailChecked,
                  emailCheck,
                  setEmailCodeInput
                )
              }
            />
          </div>
          <p className="text-red-700">{error.email}</p>
          <div
            className={`flex items-center mb-[10px] ${
              emailCodeInput ? "block" : "hidden"
            }`}
          >
            <SignInput
              type={"text"}
              placeholder={"코드"}
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
            />
            <button
              className="w-[80px] h-[40px] rounded-[10px] bg-[#D1B383] text-white text-[16px] leading-none"
              onClick={handleEmailCodeCheck}
            >
              확인
            </button>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="my-[10px]">
              <SignInputOne
                type={"password"}
                placeholder={"비밀번호"}
                value={signUpUser.request_data.password}
                onChange={(e) =>
                  handlePassword(e, error, setError, setSignUpUser, signUpUser)
                }
              />
            </div>
            <p className="text-red-700">{error.password}</p>
            <div className="my-[10px]">
              <SignInputOne
                type={"password"}
                placeholder={"비밀번호 확인"}
                value={checkedPassword}
                onChange={(e) =>
                  handlePassword1(e, error, setError, setCheckedPassword)
                }
              />
            </div>
          </form>
          <p className="text-red-700">{error.password1}</p>
          <div className="my-[10px]">
            <SignInputOne
              type={"text"}
              placeholder={"이름"}
              value={signUpUser.request_data.name}
              onChange={(e) =>
                handleName(e, error, setError, setSignUpUser, signUpUser)
              }
            />
          </div>
          <p className="text-red-700">{error.name}</p>
          <div className="flex items-center justify-between my-[10px]">
            <SignInput
              type={"text"}
              placeholder={"닉네임"}
              value={signUpUser.request_data.nickname}
              onChange={(e) =>
                handleNickname(e, error, setError, setSignUpUser, signUpUser)
              }
            />
            <CheckButton title={"닉네임 확인"} onClick={handleNickNameCheck} />
          </div>
          <p className="text-red-700">{error.nickname}</p>
          <div
            className={`w-[518px] h-[60px] mt-[10px] max-[560px]:w-full flex items-center text-white cursor-pointer ${
              isClicked ? "border-white" : "border-[#D1B383]"
            } border-[#D1B383] justify-center rounded-xl border text-center relative`}
            onClick={() => setIsClicked(!isClicked)}
          >
            <div className="w-full px-4 flex justify-between items-center">
              <IoIosArrowDown className="opacity-0" />
              {gender}
              <IoIosArrowDown />
            </div>
            {isClicked ? (
              <ul
                className="bg-white absolute border w-full border-[#D1B383]  z-10 top-[60px] rounded-xl"
                ref={ref}
              >
                {genderOptions.map((gender) => (
                  <li
                    key={gender.id}
                    className={`w-full box-border hover:bg-[#D1B383] text-black hover:text-white border-[#D1B383] text-lg border-b leading-10 flex items-center justify-center first:rounded-t-xl last:rounded-b-xl last:border-b-0 cursor-pointer `}
                    onClick={() => {
                      setGender(gender.label);
                      handleGender(
                        gender.label,
                        error,
                        setError,
                        setSignUpUser,
                        signUpUser
                      );
                      setIsClicked(false);
                    }}
                  >
                    {gender.label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <p className="text-red-700">{error.gender}</p>
          <div className="flex items-center justify-between my-[10px]">
            <SignInput
              type={"text"}
              placeholder={"연락처"}
              value={signUpUser.request_data.contact}
              onChange={(e) =>
                handlePhone(e, error, setError, setSignUpUser, signUpUser)
              }
            />
            <CheckButton title={"휴대폰 인증"} onClick={handlePhoneCheck} />
          </div>
          <p className="text-red-700">{error.phoneNumber}</p>
          <div className="mt-[10px]">
            <input
              type="date"
              className="w-[518px] h-[60px] max-[560px]:w-full outline-none focus:border-white border border-[#D1B383] rounded-[10px] bg-[#222] text-white pl-4"
              placeholder="생년월일"
              value={useDate}
              onChange={(e) =>
                handleDate(
                  e,
                  setUseDate,
                  error,
                  setError,
                  setSignUpUser,
                  signUpUser
                )
              }
            />
          </div>
          <p className="text-red-700">{error.age}</p>
          <div className="h-[40px]" />
          <TermCheck setSignUpUser={setSignUpUser} />
          <p className="text-red-700">
            {error.checked1 || error.checked2 || error.checked3}
          </p>
          <div className="h-[40px]" />
          <div>
            <button
              className="w-[518px] h-[74px] max-[560px]:w-full rounded-[10px] bg-[#D1B383] text-white text-lg"
              onClick={handleSignUpUser}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
      {isEmailChecked && <EmailLoading />}
    </>
  );
};

export default SignUp;
