type ShortMenuProps = {
  isChecked: boolean;
  ref: any;
  menu: { id: number; name: string; link: string }[];
  setAccessToken: (value: string | null) => void;
  setIsLogout: (value: boolean) => void;
  router: any;
  setIsChecked: (value: boolean) => void;
};

const ShortMenu = ({
  isChecked,
  ref,
  menu,
  setAccessToken,
  setIsLogout,
  router,
  setIsChecked,
}: ShortMenuProps) => {
  return (
    <div
      className={`absolute left-0 -bottom-[200px] w-full hidden max-[1200px]:${
        isChecked ? "block" : "hidden"
      }`}
      ref={ref}
    >
      <ul className="w-full bg-[#2e2e2e] text-[#D1B383] text-[18px]  text-center">
        {menu.map((item) => (
          <li
            key={item!.id}
            className="leading-10 hover:bg-[#D1B383] cursor-pointer hover:text-white"
            onClick={() => {
              if (item.name === "로그아웃") {
                const confirmValue = confirm("로그아웃 하시겠습니까?");
                if (confirmValue) {
                  localStorage.removeItem("access_token");
                  setAccessToken(null);
                  setIsLogout(false);
                  router.push("/");
                }
              } else if (item.name === "마이페이지") {
                if (!localStorage.getItem("access_token")) {
                  alert("로그인이 필요합니다.");
                  router.push("/login");
                } else {
                  router.push(item!.link);
                }
              } else {
                router.push(item!.link);
              }
              setIsChecked(false);
            }}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortMenu;
