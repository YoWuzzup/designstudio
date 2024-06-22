"use client";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

const info = [
  {
    name: "Define",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
  {
    name: "Design",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
  {
    name: "Build",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
  {
    name: "Launch",
    para: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab.",
  },
];

const Item = ({
  index,
  info,
}: {
  index: number;
  info: { name: string; para: string };
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`w-full md:w-[47%] ${isVisible ? "animate-fadeinup" : ""}`}
    >
      <div
        data-num={index + 1}
        className={`relative text-secondary text-xl md:text-3xl pl-20 mb-8 font-semibold h-[48px] 
            flex justify-start items-center
            before:absolute before:top-0 before:left-0 before:w-[48px] before:h-[48px] 
            before:bg-[#26bfb5] before:rounded-full before:content-[attr(data-num)]
            before:flex before:justify-center before:items-center before:text-primary`}
      >
        {info.name}
      </div>
      <div
        className="relative text-[#555] text-base md:text-lg pl-0 sm:pl-20
            before:hidden before:sm:block
            before:absolute before:top-0 before:left-6 before:w-[1px] before:h-full 
            before:bg-[#555555F2] before:content-['']"
      >
        {info.para}
      </div>
    </div>
  );
};

export const WhoWeAre: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerIsVisible = useIsVisible(headerRef);

  return (
    <section
      id="whoweare"
      className="w-full bg-white flex flex-col justify-center items-center py-20 md:py-44"
    >
      <div
        className={`w-10/12 mb-16 ${headerIsVisible ? "animate-fadeinup" : ""}`}
      >
        <div
          ref={headerRef}
          className={`text-colorful text-sm md:text-base uppercase mb-5`}
        >
          / who we are
        </div>
        <h2
          className={`text-secondary text-3xl md:text-6xl font-bold mb-12 leading-snug`}
        >
          We are a group of design driven individuals passionate about creating
          beautiful UI designs.
        </h2>
        <p className={`text-[#555555F2] text-lg md:text-3xl leading-9`}>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec
          rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse.
        </p>
      </div>

      <div className="w-10/12 flex flex-col md:flex-row flex-wrap justify-between items-start gap-5">
        {info.map((i, indx) => (
          <Item key={`${i.name}_${indx}`} index={indx} info={i} />
        ))}
      </div>
    </section>
  );
};
