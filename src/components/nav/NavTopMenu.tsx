import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type NavTopMenuProps = {
  menu: { id: number; name: string; link: string }[];
  accessToken: string | null;
  router: AppRouterInstance;
};

const NavTopMenu = ({ menu, accessToken, router }: NavTopMenuProps) => {
  return (
    <div className="flex text-white">
      {menu.slice(2, accessToken ? 4 : 5).map((item) => (
        <p
          key={item?.id}
          className="mx-[10px] cursor-pointer hover:text-[#D1B383]"
          onClick={() => {
            if (item.name === "마이페이지") {
              console.log("뭐클릭", item.link);
              // if (!localStorage.getItem('access_token')) {
              //   alert('로그인이 필요합니다.');
              //   router.push('/login');
              // } else {
              //   router.push(item!.link);
              // }
            } else {
            }
            router.push(item!.link);
          }}
        >
          {item?.name}
        </p>
      ))}
    </div>
  );
};

export default NavTopMenu;
