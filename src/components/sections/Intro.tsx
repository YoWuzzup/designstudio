"use client";
import Link from "next/link";
import { useState } from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { useWindowSize } from "usehooks-ts";

const socialMedia = [
  {
    name: "facebook",
    href: "",
    icon: <FacebookOutlinedIcon fontSize="small" />,
  },
  { name: "x", href: "", icon: <XIcon fontSize="small" /> },
  { name: "linkedin", href: "", icon: <LinkedInIcon fontSize="small" /> },
];

export const Intro: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <section className="w-full min-h-screen px-8 py-6 sm:py-12 sm:px-16 bg-intro bg-cover">
      <div>
        <div className="w-full flex flex-row nowrap justify-between mb-48">
          <Link href={"/"}>
            <img src="/logos/logo.svg" alt="logo" className=""></img>
          </Link>

          <div className="text-primary flex justify-center align-center items-center nowrap gap-5">
            <span className="uppercase hidden md:block">menu</span>
            <div
              className="space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-secondary"></span>
              <span className="block h-0.5 w-8 bg-secondary"></span>
              <span className="block h-0.5 w-8 bg-secondary"></span>
            </div>
          </div>
        </div>

        <div className="mb-36">
          <h1 className="text-5xl tracking-tighter mb-8">
            Hello folks, we are Transcend Studio.
          </h1>
          <p
            className="text-primary opacity-80 relative pt-8 text-2xl
              before:content-[''] before:absolute before:h-[2px] before:w-[55px]
              before:bg-[#cc147f] before:top-0 before:left-0
              before:transition-all"
          >
            We create stunning digital experiences that will help your business
            stand out
          </p>
        </div>

        <div className="flex flex-row nowrap gap-8 content-center items-center">
          <p className="font-semibold text-sm whitespace-nowrap">Follow Us</p>
          <div className="grow flex flex-row nowrap gap-3">
            {socialMedia.map((sm, indx) => (
              <Link
                key={`${sm.name}_${indx}`}
                href={sm.href}
                className="relative transition-all ease-in-out duration-300 capitalize md:px-2
                  after:content-[''] after:absolute after:h-[2px] after:w-full after:opacity-0
                  after:bg-[#fff] after:-bottom-4 after:left-0 after:transition-all after:duration-500 
                  hover:after:opacity-100"
              >
                {width < 500 ? sm.icon : sm.name}
              </Link>
            ))}
          </div>
          <button
            className="w-[42px] h-[42px] bg-white rounded-full
            md:w-[48px] md:h-[48px]"
          ></button>
        </div>
      </div>
    </section>
  );
};
