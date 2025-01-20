import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  targetRef2: React.RefObject<HTMLImageElement>;
  params: string;
};

const Logo = ({ targetRef2, params }: LogoProps) => {
  return (
    <Link href={"/"}>
      <Image
        ref={targetRef2}
        src={"/images/logo.png"}
        width={200}
        height={200}
        className={`w-[200px] h-auto transition-all duration-[0.3s] ease-out z-0 ${
          params === "/login" ? "opacity-0" : "opacity-100"
        }
            `}
        alt="logo"
        priority
      />
    </Link>
  );
};

export default Logo;
