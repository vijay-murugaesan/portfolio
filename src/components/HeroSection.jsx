import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Logo from "./ui/Logo";

export const HeroSection = () => {
  return (
    <div className="w-full lg:min-h-screen sm:min-h-max overflow-x-hidden grid lg:grid-cols-[1fr_1fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <Logo />
        <div className="flex flex-col justify-center h-[80%] md:h-[50%] my-5 md:my-10 lg:my-0 xl:my-auto xl:h-[90%]">
          <span className="font-[600] text-[#4e69e0]">Its me</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Vijay M, <br /> React & Next Js <Cover>Developer</Cover>
          </h2>
        </div>
      </div>

      <div className="w-[90%] mx-auto lg:my-28 py-[30px] flex flex-col items-start xl:justify-center z-2">
        <a
          href="#contact"
          className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px]"
        >
          Contact Me
        </a>
        <h2 className="bg-clip-text mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
          About Me
        </h2>
        <p className="max-w-2xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          Experienced React js developer with 3 years of hands-on expertise in
          full-stack web development. Proficient in HTML, CSS, JavaScript,
          TypeScript, React18, and Next.Js 14 with a strong focus on building
          robust and scalable web applications. Skilled in collaborative
          teamwork, passionate about coding, and thrive in dynamic environments
          with a commitment to efficient, maintainable code
        </p>
        <p className="max-w-2xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          Aside from working hard, I tend to enjoy simple things like reading,
          watching movies, hitting the gym, and other things we humans do. If
          any of what I said seems interesting, then please do not hesitate to
          send me a message.
        </p>
      </div>

      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />
    </div>
  );
};
