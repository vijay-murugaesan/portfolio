import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "@/components/ui/cover";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h2 className="font-[600] text-[#f4f4f4] text-[1.8rem]">
              <Cover>Freelancing</Cover>
            </h2>
            <span className="text-blue-400 my-[10px]">May 2023 - Nov 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Work as a FullStack Developer
            </p>
          </div>
          <div>
            <h2 className="font-[600] text-[#f4f4f4] text-[1.8rem]">
              <Cover>Inkrefuge</Cover>
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
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h2 className="font-[600] text-[#f4f4f4] text-[1.8rem]">
              <Cover>Bishop Heber College</Cover>
            </h2>
            <span className="text-blue-400 my-[10px]">2016 - 2019</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Bachelor of Computer Applications ( BCA )
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