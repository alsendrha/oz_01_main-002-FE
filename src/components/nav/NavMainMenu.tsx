import Link from "next/link";

type NavMainMenuType = {
  menu: { id: number; name: string; link: string }[];
};

const NavMainMenu = ({ menu }: NavMainMenuType) => {
  return (
    <div className="flex items-center mt-2 w-[425px] max-[1200px]:hidden">
      {menu.slice(0, 2).map((item) => (
        <Link key={item!.id} href={item!.link}>
          <p className="text-white text-[24px] leading-none mx-[27.5px] hover:text-[#D1B383]">
            {item!.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavMainMenu;
