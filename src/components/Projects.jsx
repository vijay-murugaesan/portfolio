"use client";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Fooyes = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Fooyes ( Food Ordering Website )
        </span> */}
        Food Ordering Website project created with React.js, Redux, Html and
        Bootstrap for ordering food online. The website includes features such
        as user authentication, a home page with a Top restaurant list,
        Restaurant listing and detail pages, order page with checkout details
        and a shopping cart.
      </p>
    </div>
  );
};
const Workhub = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Workhub ( Project Management )
        </span> */}
        This is a Workhub ( Project Management ) built with React and Next.js
        14, featuring modern development practices and a range of powerful
        features. It explores React Server Components together with client side
        fetching and caching with React Query, among many other cutting edge
        technologies.
      </p>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Fooyes ( Food Ordering Website )
        </span> */}
        Personal portfolio website built with Next.js. It serves as a
        digital resume and project showcase, where I highlight my skills,
        experiences, and key projects in frontend development.
      </p>
    </div>
  );
};

const data = [
  {
    category: "Personal",
    title: "Portfolio",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Portfolio />,
  },
  {
    category: "Project Management",
    title: "WorkHub",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Workhub />,
  },
  {
    category: "Food Delivery",
    title: "Fooyes",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Fooyes />,
  },
];
