"use client";
import React, { useEffect } from "react";
import { animate, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  Redux,
  NextJs,
  Js,
  Ts,
  ReactJs,
  Express,
  Tailwind,
} from "@/components/skills/index";

export const Skills = () => {
  return (
    <div
      className="h-[35rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      id="skills"
    >
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center text-white font-medium">
        Tools Of The Present And Future
      </h4>

      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </div>
  );
};

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-6",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-7",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-6 w-6 lg:size-12 circle-1">
          <Js className="h-3 w-3 lg:size-6" />
        </Container>
        <Container className="h-8 w-8 lg:size-16 circle-2">
          <Tailwind className="h-4 w-4 lg:size-10" />
        </Container>
        <Container className="h-12 w-12 lg:size-24 circle-3">
          <NextJs className="h-6 w-6 lg:size-12 dark:text-white" />
        </Container>
        <Container className="circle-4 lg:size-32">
          <ReactJs className="h-8 w-8 lg:size-16 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-5 lg:size-24">
          <Express className="h-6 w-6 lg:size-12" />
        </Container>
        <Container className="h-8 w-8 circle-6 lg:size-16">
          <Redux className="h-4 w-4 lg:size-8" />
        </Container>
        <Container className="h-6 w-6 lg:size-12 circle-7">
          <Ts className="h-3 w-3 lg:size-6" />
        </Container>
      </div>
      <div className="w-px h-60 absolute top-10 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-36 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            borderRadius: "50%",
          }}
          className={`inline-block bg-black dark:bg-white absolute w-[2px] h-[2px] z-[1] top-[${
            random() * 100
          }%] left-[${random() * 100}%]`}
        ></motion.span>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}) => {
  return (
    <div
      className={cn(
        "h-[20rem] md:h-[20rem] rounded-xl z-40 w-full",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
