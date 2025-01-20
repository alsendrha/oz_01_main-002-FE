import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/images/logo.png"}
      width={500}
      height={500}
      className="w-[380px] h-auto mb-5"
      sizes="1"
      alt="로고이미지"
    />
  );
};

export default Logo;
