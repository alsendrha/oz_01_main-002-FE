import Image from "next/image";

type CategoryItemType = {
  category: {
    name: string;
    img: string;
  };
};

const CategoryItem = ({ category }: CategoryItemType) => {
  return (
    <div className="mb-[26px]">
      <div className="w-[261px] h-[261px] relative object-cover max-[1200px]:w-[180px] max-[1200px]:h-[180px] max-[865px]:w-[120px] max-[865px]:h-[120px] max-[625px]:w-[80px] max-[625px]:h-[80px] mb-2 overflow-hidden rounded-[8px] mx-[16px]">
        <Image
          src={category.img}
          fill
          sizes="1"
          className="object-cover bg-white"
          alt="카테고리 이미지"
        />
      </div>
      <p className="text-[#D1B383] text-[24px] leading-[29px] ml-[16px] max-[1200px]:text-[20px] max-[625px]:text-[16px]">
        {category.name}
      </p>
    </div>
  );
};

export default CategoryItem;
