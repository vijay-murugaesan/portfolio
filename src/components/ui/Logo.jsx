import Image from "next/image";

const Logo = () => {
  return (
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
  );
};

export default Logo;
