type SubTitleProps = {
  title: string;
  content: string;
};

const SubTitle = ({ title, content }: SubTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-5xl leading-[58px] text-white mb-[20px] max-[865px]:text-[32px] max-[865px]:leading-none">
        {title}
      </p>
      <div className="border border-[#D1B383] w-20 mb-[20px]"></div>
      <p className="text-[24px] leading-[29px] text-[#868686] mb-[20px] max-[865px]:text-[16px] max-[865px]:leading-none">
        {content}
      </p>
    </div>
  );
};

export default SubTitle;
