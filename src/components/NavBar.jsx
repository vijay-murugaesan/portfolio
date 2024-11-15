import { IconHome } from "@tabler/icons-react";
import { Code2Icon, MailIcon, Settings2Icon, StarIcon } from "lucide-react";
import { GoProjectRoadmap } from "react-icons/go";

import { FloatingDock } from "@/components/ui/floating-dock";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <Code2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Skills",
      icon: (
        <StarIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Resume",
      icon: (
        <GoProjectRoadmap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "Projects",
      icon: (
        <Settings2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <MailIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101] fixed">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
