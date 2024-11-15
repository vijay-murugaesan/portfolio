import {
  IconAdjustmentsBolt,
  IconHeart,
  IconTerminal2,
} from "@tabler/icons-react";

import { Cover } from "./ui/cover";
import { cn } from "@/lib/utils";

export function Services() {
  const features = [
    {
      title: "Front-End",
      description:
        "As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Back-End",
      description:
        "I accurately implement the business logic of your web app on the back end. I always rely on proven frameworks to ensure fast and quality coding. And I build well structured APIs to integrate your web app with corporate or third-party systems and services",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="flex flex-col mt-[30px]" id="services">
      <div className="flex flex-col justify-center items-center px-8">
        <h2 className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>Our Services</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] mt-[20px] text-center md:text-lg text-neutral-700 dark:text-neutral-400">
          We provide You quality of services
        </p>
      </div>
      (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      )
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
