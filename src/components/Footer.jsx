import Logo from "./ui/Logo";

export const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d]">
      <Logo />
      <span className="text-[0.9rem] font-[500] text-[#9e9e9e]">
        Going to internet - Copyright 2024
      </span>
    </div>
  );
};


