"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { useInView } from "react-intersection-observer";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const socialMedia = [
  {
    name: "facebook",
    href: "",
    icon: <FacebookOutlinedIcon fontSize="small" />,
  },
  { name: "x", href: "", icon: <XIcon fontSize="small" /> },
  { name: "linkedin", href: "", icon: <LinkedInIcon fontSize="small" /> },
];

const sideLinks = [
  { header: "about", subheader: "who we are", href: "whoweare" },
  { header: "services", subheader: "what we do", href: "whatwedo" },
  { header: "contact", subheader: "get in touch", href: "footer" },
];

export const Intro: React.FC = () => {
  const [headerRef, inView] = useInView({ triggerOnce: true });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="intro"
      className="w-full min-h-screen pb-0 lg:pb-20 relative flex items-start justify-center bg-intro bg-cover bg-fixed"
    >
      {/* background transparent */}
      <div className="w-full h-full absolute top-0 left-0 bg-transparent/[.7] z-0" />

      <div className="w-[90%] mt-10 z-20">
        <div className="w-full flex flex-row nowrap justify-between mb-48">
          <Link href={"/"} className="w-3/4 sm:w-auto">
            <img src="/logos/logo.svg" alt="logo" className=""></img>
          </Link>

          {/* side menu button */}
          <div className="group/menubtn absolute right-5 sm:right-20 top-11 sm:top-14 text-primary cursor-pointer flex justify-center align-center items-center nowrap gap-5">
            <span className="group-hover/menubtn:text-colorful duration-500 text-primary uppercase hidden md:block">
              menu
            </span>
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

        <div
          className={`ml-0 lg:ml-28 mb-48 flex flex-col w-full lg:w-[65%]`}
          ref={headerRef}
        >
          <h1
            className={`text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-8 duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            } ${inView ? "translate-y-0" : "translate-y-12"}`}
          >
            Hello folks, we are Transcend Studio.
          </h1>
          <p
            className={`text-primary relative pt-8 md:pt-0 pl-0 text-xl sm:text-2xl md:text-4xl
              before:content-[''] before:absolute before:h-[2px] before:w-[55px]
              before:bg-colorful before:top-0 before:left-0 before:transition-all
              md:before:top-1/3 md:pl-20 duration-700 ${
                inView ? "opacity-80" : "opacity-0"
              } ${inView ? "translate-y-0" : "translate-y-12"}`}
          >
            We create stunning digital experiences that will help your business
            stand out.
          </p>

          <div className="hidden lg:flex flex-col absolute right-0 top-1/2 -translate-y-1/2">
            {sideLinks.map((l, i) => (
              <a
                href={`#${l.href}`}
                key={`${l.header}_${i}`}
                className="flex flex-col scroll-smooth justify-center items-start py-5 pl-10 pr-[150px] transition-all duration-500
                  bg-transparent/[.2] hover:bg-transparent/[.5]"
              >
                <span
                  className="uppercase text-primary relative tracking-[3px] text-[13px]
                      before:content-[''] before:absolute before:h-[6px] before:w-[6px] before:rounded-full
                      before:bg-colorful before:top-0 before:-left-5 before:transition-all
                      md:before:top-1/2"
                >
                  {l.header}
                </span>
                <span className="text-[#ffffff80] text-[15px]">
                  {l.subheader}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row nowrap gap-8 content-center items-center">
          <p className="font-semibold text-sm whitespace-nowrap">Follow Us</p>
          <div className="grow flex flex-row nowrap gap-3">
            {socialMedia.map((sm, indx) => (
              <Link
                key={`${sm.name}_${indx}`}
                href={sm.href}
                className="relative transition-all ease-in-out duration-300 capitalize text-sm md:px-2
                  after:content-[''] after:absolute after:h-[2px] after:w-full after:opacity-0
                  after:bg-secondary after:-bottom-4 after:left-0 after:transition-all after:duration-500 
                  hover:after:opacity-100"
              >
                {isMounted && width && width < 500 ? sm.icon : sm.name}
              </Link>
            ))}
          </div>

          {/* scroll down button */}
          <div>
            <a
              href="#whoweare"
              className="group/scrolldown scroll-smooth text-primary cursor-pointer flex justify-center align-center items-center nowrap gap-5"
            >
              <span
                className="relative duration-500 text-primary uppercase hidden md:block
              after:content-[''] after:absolute after:h-[2px] after:w-full after:opacity-0
              after:bg-secondary after:-bottom-4 after:left-0 after:transition-all after:duration-500 
              group-hover/scrolldown:after:opacity-100"
              >
                scroll down
              </span>{" "}
              <div className="w-[42px] h-[42px] flex justify-center items-center bg-white rounded-full md:w-[48px] md:h-[48px]">
                <ArrowDownwardIcon className="text-md text-secondary" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
