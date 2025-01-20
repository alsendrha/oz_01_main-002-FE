"use client";

import Categories from "@/components/main/categories/Categories";
import ItemList from "@/components/main/ItemList";
import MainCarousel from "@/components/main/MainCarousel";
import MoreButton from "@/components/main/MoreButton";
import SubTitle from "@/components/main/SubTitle";
import { data } from "@/data/data";
import Image from "next/image";

const MainPage = () => {
  // const { data } = useGetAuctionProducts();
  return (
    <div className="bg-[#222] w-full">
      <MainCarousel />
      <div className="h-[97px] max-[625px]:h-[50px]" />
      <Categories />
      <div className="h-[153px]" />
      <div className="w-full flex justify-center mb-10">
        <SubTitle
          title="인기상품"
          content="경매 상품들 중 인기상품들 입니다."
        />
      </div>
      <div className="flex w-full justify-center">
        <div className="w-[560px] h-[560px] max-[865px]:w-[360px] max-[865px]:h-[360px] max-[625px]:w-[260px] max-[625px]:h-[260px] object-cover mb-2 rounded-[8px] relative overflow-hidden">
          <Image src={"/images/image001.png"} fill sizes="1" alt="item01" />
        </div>
        <div className="ml-[60px] max-[625px]:ml-[10px]">
          <ItemList data={data} />
        </div>
      </div>
      <div className="h-[158px]" />
      <div className="w-full flex justify-center mb-10">
        <SubTitle title="경매상품" content="경매가 진행중인 상품들 입니다." />
      </div>
      <div className="w-full flex justify-center">
        <div className="mr-[47.5px] max-[1200px]:mr-[0px] max-w-[510px] flex flex-wrap justify-center">
          <ItemList data={data} />
        </div>
        <div className="w-[560px] h-[560px] max-[1200px]:hidden max-[865px]:w-[390px] max-[865px]:h-[390px] max-[625px]:w-[280px] max-[625px]:h-[280px] object-cover mb-2 rounded-[8px] overflow-hidden relative">
          <Image src={"/images/image002.png"} fill sizes="1" alt="item01" />
        </div>
      </div>
      <div className="h-[38px]" />
      <MoreButton />
    </div>
  );
};

export default MainPage;
