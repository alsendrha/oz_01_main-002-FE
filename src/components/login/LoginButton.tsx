import Image from "next/image";

type LoginButtonProps = {
  link: string;
  title: string;
};

const LoginButton = ({ link, title }: LoginButtonProps) => {
  return (
    <div>
      <div
        className={`w-[50px] h-[50px] mx-[33px] ${
          title === "KakaoTalk으로" ? "bg-[#FEE500]" : "bg-[#FFFFFF]"
        } rounded-full flex justify-center items-center`}
      >
        <Image
          src={link}
          width={50}
          height={50}
          className="w-[30px] h-[30 .3px] "
          alt="카카오심볼"
        />
      </div>
      <div className="text-xs text-[#828282] flex flex-col items-center mt-[10px]">
        <p>{title}</p>
        <p>시작하기</p>
      </div>
    </div>
  );
};

export default LoginButton;
