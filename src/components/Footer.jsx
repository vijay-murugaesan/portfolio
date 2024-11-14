import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-center items-center border-t border-[#1d1d1d]">
      <a href="/">
        <Image
          src="/images/logo.png"
          width={120}
          height={80}
          alt="logo"
          className="h-full max-h-[80px] object-contain object-center"
        />
      </a>
      <span className="text-[0.9rem] font-[500] text-[#9e9e9e]">
        Going to internet - Copyright 2024
      </span>
    </div>
  );
};

export default Footer;
