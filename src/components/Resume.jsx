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
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mt-2 font-normal mb-8">
              <span className="text-blue-400 my-[10px]">Projects</span> : ( Web
              Applications )
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Doctor Booking Appointment,
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Restaurant Management,
                </div>
              </div>
            </div>
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

            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mt-2 font-normal mb-8">
              <span className="text-blue-400 my-[10px]">Projects</span> : ( Web
              Applications )
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Seat Reservation System For Private Events,
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Venue & Event Management,
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Hotel Management
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Event booking for Beverage Catering
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Food Ordering & Blog
                </div>
              </div>
            </div>
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
              <Cover>PHP & Codeigniter Developer</Cover>
            </h2>
            <span className="text-blue-400 my-[10px]">Oct 2019 - Sep 2020</span>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mt-2 font-normal mb-1">
              <span className="text-blue-400 my-[10px]">Projects</span> : ( Web
              Applications )
              <div className="mb-1">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Customer Relationship Management ( CRM )
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  Matrimonial Management
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  NEET / JEE Coaching Institute 
                </div>
              </div>
            </div>
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
