import Link from "next/link";

const MoreButton = () => {
  return (
    <Link
      href={{
        pathname: "/productList",
        query: {
          id: "list",
        },
      }}
    >
      <div className="flex justify-center">
        <div className="w-[118px] h-[50px] max-[625px]:w-[80px] max-[625px]:h-[40px] rounded-full bg-[#D1B383] flex justify-center text-white items-center transition-all duration-[0.3s] ease-out border-[2px] border-[#D1B383] hover:bg-white hover:text-[#D1B383]">
          <p className="text-[20px] max-[625px]:text-[16px]">more</p>
        </div>
      </div>
    </Link>
  );
};

export default MoreButton;
