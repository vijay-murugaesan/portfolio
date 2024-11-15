"use client";
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

const PopupModal = ({ index }) => {
  const { description, liveSite, github } = data[index - 1] || [];
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col">
      {index ? (
        <>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {description}
          </p>
          <div className="flex flex-row justify-center gap-10 items-center mt-10 md:text-2xl font-sans max-w-3xl">
            <div className="relative z-10 px-6 py-2 bg-white text-black font-bold rounded-xl block text-xs">
              <a href={liveSite}>Live Site</a>
            </div>
            <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
              <a href={github}>Github</a>
            </div>
          </div>
        </>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          No Content
        </p>
      )}
    </div>
  );
};

const data = [
  {
    category: "Personal",
    title: "Portfolio",
    src: "/images/projects/portfolio.jpeg",
    content: <PopupModal index={1} />,
    description:
      "Personal portfolio website built with Next.js. It serves as a digital resume and project showcase, where I highlight my skills, experiences, and key projects in frontend development.",
    liveSite: "https://vijaymurugaesan-portfolio.vercel.app/",
    github: "https://github.com/vijay-murugaesan/portfolio",
  },
  {
    category: "Project Management",
    title: "WorkHub",
    src: "/images/projects/workhub.jpeg",
    content: <PopupModal index={2} />,
    description:
      "This is a Workhub ( Project Management ) built with React and Next.js 14, featuring modern development practices and a range of powerful features. It explores React Server Components together with client side fetching and caching with React Query, among many other cutting edge technologies.",
    liveSite: "https://workhub-project.vercel.app/",
    github: "https://github.com/vijay-murugaesan/workhub",
  },
  {
    category: "Food Delivery",
    title: "Fooyes",
    src: "/images/projects/fooyes.jpeg",
    content: <PopupModal index={3} />,
    description:
      "Food Ordering Website project created with React.js, Redux, Html and Bootstrap for ordering food online. The website includes features such as user authentication, a home page with a Top restaurant list, Restaurant listing and detail pages, order page with checkout details and a shopping cart.",
    liveSite: "https://fooyes.vercel.app/",
    github: "https://github.com/vijay-murugaesan/Fooyes",
  },
];
