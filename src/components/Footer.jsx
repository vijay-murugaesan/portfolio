import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d]">
      <a href="/" className="flex flex-row items-center">
        <Image
          src="/images/Vlogo.png"
          width={80}
          height={80}
          alt="logo"
          className="h-full max-h-[80px] filter invert sepia-[1%] saturate-100 hue-rotate-0 brightness-150 contrast-200"
        />
        <p className="text-white text-3xl relative -left-3">ijay</p>
      </a>
      <span className="text-[0.9rem] font-[500] text-[#9e9e9e]">
        Going to internet - Copyright 2024
      </span>
    </div>
  );
};

export default Footer;
