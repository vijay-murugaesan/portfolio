import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "@/components/ui/cover";

export function Resume() {
  const data = [
    {
      title: "Freelancer",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h2 className="font-[600] text-[#f4f4f4] text-[1.8rem]">
              <Cover>React & Next Js Developer</Cover>
            </h2>
            <span className="text-blue-400 my-[10px]">May 2023 - Nov 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Work as a FullStack Developer
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Inkrefuge",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h2 className="font-[600] text-[#f4f4f4] text-[1.8rem]">
              <Cover>MERN Developer</Cover>
            </h2>
            <span className="text-blue-400 my-[10px]">Feb 2021 - Apr 2023</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Work as a React JS Developer
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Green Line Technologies",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h2 className="font-[600] text-[#f4f4f4] text-[1.8rem]">
              <Cover>PHP Programmer & Codeigniter Developer</Cover>
            </h2>
            <span className="text-blue-400 my-[10px]">Oct 2019 - Sep 2020</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Work as a FullStack Developer
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="resume">
      <Timeline data={data} />
    </div>
  );
}
