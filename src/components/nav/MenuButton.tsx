type MenuButtonProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  isChecked: boolean;
};

const MenuButton = ({ onClick, isChecked }: MenuButtonProps) => {
  return (
    <div className="absolute">
      <div
        className="w-[30px] h-[30px]  hidden max-[1200px]:block mr-[30px] relative"
        onClick={onClick}
      >
        <div
          className={`w-full h-[3px] absolute rounded-full transform bg-white transition-all duration-[0.3s]  ease-out ${
            isChecked
              ? "top-1/2 -translate-y-1/2 rotate-[45deg]"
              : "top-0 rotate-[0deg]"
          }`}
        ></div>
        <div
          className={`w-full h-[3px] absolute top-1/2 transform -translate-y-1/2 rounded-full bg-white transition-all duration-[0.3s] ease-out ${
            isChecked ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-full h-[3px] absolute rounded-full transform bg-white transition-all duration-[0.3s] ease-out ${
            isChecked
              ? "bottom-1/2 translate-y-1/2 rotate-[-45deg]"
              : "bottom-0 rotate-[0deg]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MenuButton;
