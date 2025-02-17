"use client";

import { useGetUser } from "@/api/userApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProfileButton from "./ProfileButton";
const MyPageProfile = () => {
  // const { data, isLoading } = useGetUser();
  // const router = useRouter();
  // useEffect(() => {
  //   if (!localStorage.getItem('access_token')) {
  //     router.push('/login');
  //     return;
  //   } else {
  //   }
  // }, [])
  const data: any = [];

  return (
    <div className="flex items-center justify-between w-full border rounded-xl px-8 py-4 bg-white mb-5">
      {
        // isLoading ?
        //   <div className="h-[100px] flex justify-center items-center">
        //     <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-t from-[#D1B383] to-white flex justify-center items-center animate-spin">
        //       <div className="w-[55px] h-[55px] rounded-full bg-white" />
        //     </div>
        //   </div>
        //   :
        <div className="flex items-center">
          <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden">
            <Image
              src={
                // data?.data.image ? data?.data.image :
                "/images/no_profile.png"
              }
              fill
              sizes="1"
              alt="프로필 이미지"
            />
          </div>
          <div className="ml-[16px] leading-9">
            <p className="text-black text-[24px] max-[920px]:text-[20px] font-semibold">
              {
                // data?.data.nickname ? data?.data.nickname :
                "닉네임"
              }
            </p>
            <p className="text-[#868686] text-[20px] max-[920px]:text-[16px] ">
              {
                // data?.data.email ? data?.data.email :
                "이메일"
              }
            </p>
          </div>
        </div>
      }
      <ProfileButton />
    </div>
  );
};
export default MyPageProfile;
