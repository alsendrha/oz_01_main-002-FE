"use client";

import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useOnclickOutside } from "../../hooks/useOnClickOutSide";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavMainMenu from "./NavMainMenu";
import NavTopMenu from "./NavTopMenu";
import ShortMenu from "./ShortMenu";

const Nav = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLImageElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const params = usePathname();
  const router = useRouter();
  const ref = useRef(null);
  const [isLogout, setIsLogout] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
  }, [params]);

  const menu = [
    { id: 1, name: "경매", link: "/productList?id=list" },
    { id: 2, name: "커뮤니티", link: "/community" },
    { id: 3, name: "마이페이지", link: "/myPage" },
    { id: 4, name: "관심", link: "/" },
    {
      id: 5,
      name: accessToken ? "로그아웃" : "로그인",
      link: accessToken ? "" : "/login",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsChecked(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (targetRef.current === null) return;
    if (scrollY >= 36.5) {
      targetRef.current.style.position = "fixed";
      targetRef.current.style.top = "0";
    } else {
      targetRef.current.style.position = "relative";
    }
  };

  const handleScroll2 = () => {
    const scrollY = window.scrollY;
    if (targetRef2.current === null) return;
    if (scrollY >= 37) {
      targetRef2.current.style.width = "150px";
    } else {
      targetRef2.current.style.width = "200px";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScroll2);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsChecked(!isChecked);
  };

  useOnclickOutside(ref, () => {
    setIsChecked(false);
  });

  return (
    <div>
      <div className="w-full h-[40px] flex justify-end items-center  pr-[150px] bg-[#222] max-[1200px]:hidden">
        <NavTopMenu accessToken={accessToken} menu={menu} router={router} />
      </div>
      <div
        ref={targetRef}
        className="w-full  items-center relative bg-[#222] z-[999] "
      >
        <div className="mx-auto flex items-center justify-between ">
          <div className="opacity-0 w-[425px] h-3 bg-gray-500 max-[1200px]:hidden" />
          <div className="w-[40px] h-[40px]  hidden max-[1200px]:block max-[1200px]:opacity-0 ml-[30px]" />
          <Logo targetRef2={targetRef2} params={params} />
          <div className="w-[30px] h-[30px] cursor-pointer hidden max-[1200px]:block mr-[30px] relative">
            <div
              className={`w-[30px] h-[30px] absolute z-50 ${
                !isChecked ? "hidden" : "block"
              }`}
            />
            <MenuButton isChecked={isChecked} onClick={(e) => handleClick(e)} />
          </div>
          <ShortMenu
            isChecked={isChecked}
            menu={menu}
            ref={ref}
            router={router}
            setAccessToken={setAccessToken}
            setIsChecked={setIsChecked}
            setIsLogout={setIsLogout}
          />

          <NavMainMenu menu={menu} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
