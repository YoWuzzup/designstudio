"use client";
import { useInView } from "react-intersection-observer";

import { whatWeDoInfo } from "@/utils/common";

const Item = ({
  index,
  info,
}: {
  index: number;
  info: { name: string; para: string; icon: React.ReactElement };
}) => {
  const [itemRef, inView] = useInView({ triggerOnce: true, delay: 300 });

  return (
    <div
      ref={itemRef}
      className={`w-full lg:w-[47%] duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      } ${inView ? "translate-y-0" : "translate-y-12"}`}
    >
      {info.icon}

      <div
        data-num={index + 1}
        className={`relative text-secondary text-xl md:text-3xl mb-6 font-semibold h-[48px] 
            flex justify-start items-center`}
      >
        {info.name}
      </div>
      <div className="text-[#555] text-base md:text-lg">{info.para}</div>
    </div>
  );
};

export const WhatWeDo: React.FC = () => {
  const [headerRef, inView] = useInView({ triggerOnce: true, delay: 300 });

  return (
    <section
      id="whatwedo"
      className="w-full bg-[#f1f1f1] flex flex-col justify-center items-center py-20 md:py-44"
    >
      <div
        className={`w-10/12 mb-16 duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        } ${inView ? "translate-y-0" : "translate-y-12"}`}
        ref={headerRef}
      >
        <div
          className={`text-colorful text-sm md:text-base uppercase mb-5 font-semibold`}
        >
          / what we do
        </div>
        <h2
          className={`text-secondary text-3xl md:text-6xl font-bold mb-12 leading-snug`}
        >
          We have everything you need to launch and grow a successful digital
          business.
        </h2>
        <p className={`text-[#555555F2] text-lg md:text-3xl leading-9`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
      </div>

      <div className="w-10/12 flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
        {whatWeDoInfo.map((i, indx) => (
          <Item key={`${i.name}_${indx}`} index={indx} info={i} />
        ))}
      </div>
    </section>
  );
};
