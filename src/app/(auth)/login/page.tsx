import LoginButton from "@/components/login/LoginButton";
import LoginForm from "@/components/login/LoginForm";
import Logo from "@/components/login/Logo";
import { LoginMenu } from "@/data/data";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-[#222] w-full ">
      <div className="flex flex-col mx-auto justify-center items-center w-full max-w-[372px]">
        <Logo />
        <LoginForm />
        <div className="h-20" />
        <div className="flex w-full max-w-[350px] items-center justify-between">
          {LoginMenu.map((item) => (
            <Link href={item.link} key={item.id}>
              <p className="text-[20px] leading-none text-white">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="h-20" />
        <div className="flex items-center">
          <LoginButton link="/images/kakao.svg" title="KakaoTalk으로" />
          <LoginButton link="/images/google.svg" title="Google로" />
        </div>
      </div>
    </div>
  );
};

export default Login;
