"use client";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

import TvIcon from "@mui/icons-material/Tv";
import PublicIcon from "@mui/icons-material/Public";
import TableViewIcon from "@mui/icons-material/TableView";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import WindowIcon from "@mui/icons-material/Window";
import WidgetsIcon from "@mui/icons-material/Widgets";

const info = [
  {
    name: "Brand Identity",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: <TvIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />,
  },
  {
    name: "Illustration",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <PublicIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "Web Design",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <TableViewIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "Product Strategy",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <ViewInArIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "UI/UX Design",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <WindowIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
  {
    name: "Mobile Development",
    para: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: (
      <WidgetsIcon className="text-xl text-[#26bfb5] w-[48px] h-[48px] mb-7" />
    ),
  },
];

const Item = ({
  index,
  info,
}: {
  index: number;
  info: { name: string; para: string; icon: React.ReactElement };
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`w-full lg:w-[47%] ${isVisible ? "animate-fadeinup" : ""}`}
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
  const headerRef = useRef<HTMLDivElement>(null);
  const headerIsVisible = useIsVisible(headerRef);

  return (
    <section className="w-full bg-[#f1f1f1] flex flex-col justify-center items-center py-20 md:py-44">
      <div
        className={`w-10/12 mb-16 ${headerIsVisible ? "animate-fadeinup" : ""}`}
        ref={headerRef}
      >
        <div className={`text-colorful text-sm md:text-base uppercase mb-5`}>
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
        {info.map((i, indx) => (
          <Item key={`${i.name}_${indx}`} index={indx} info={i} />
        ))}
      </div>
    </section>
  );
};
