"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const socialMedia = [
  {
    name: "facebook",
    href: "",
    icon: <FacebookOutlinedIcon fontSize="small" />,
  },
  { name: "x", href: "", icon: <XIcon fontSize="small" /> },
  { name: "linkedin", href: "", icon: <LinkedInIcon fontSize="small" /> },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [headerRef, headerinView] = useInView({
    triggerOnce: true,
    delay: 300,
  });
  const [infoRef, infoinView] = useInView({
    triggerOnce: true,
    delay: 300,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <footer
      id="footer"
      className="relative w-full pb-24 pt-52 bg-[#111] flex flex-col justify-center items-center"
    >
      {/* START: HEADER */}
      <div
        className={`w-10/12 sm:w-8/12 mb-48 duration-700 ${
          headerinView ? "opacity-100" : "opacity-0"
        } ${headerinView ? "translate-y-0" : "translate-y-12"}`}
        ref={headerRef}
      >
        <div
          className={`text-colorful text-sm md:text-base uppercase mb-5 font-semibold`}
        >
          / who we are
        </div>
        <h2
          className={`text-primary text-3xl md:text-6xl font-bold leading-snug`}
        >
          Get in touch and let's make something great together. Let's turn your
          idea on an even greater product.
        </h2>
      </div>
      {/* END: HEADER */}

      {/* ----------------------------- */}

      {/* START: CONTACT INFO */}
      <div
        ref={infoRef}
        className={`w-10/12 sm:w-8/12 flex flex-col md:flex-row flex-wrap justify-start md:justify-center items-center gap-14 duration-700 ${
          infoinView ? "opacity-100" : "opacity-0"
        } ${infoinView ? "translate-y-0" : "translate-y-12"}`}
      >
        <div
          className="w-full flex flex-col items-start gap-8 
              before:content-[''] before:absolute before:h-[2px] before:w-[55px]
              before:bg-colorful before:top-0 before:left-0 before:transition-all"
        >
          <a
            href={`mailto:this@is.email`}
            className="text-xl md:text-6xl font-light relative pt-10
            after:absolute after:content-[''] after:-bottom-5 after:left-0 after:w-full after:h-[1px] after:duration-300
            after:bg-white after:opacity-0 hover:after:opacity-30"
          >
            this@is.email
          </a>
          <span className="text-xl md:text-3xl opacity-30">
            +48 (488) 488 488 / +48 (488) 488 488
          </span>
        </div>

        <div className="flex grow flex-col items-start gap-3">
          <div
            className={`text-colorful text-sm md:text-base uppercase mb-5 font-semibold`}
          >
            / where to find us
          </div>
          <span className="text-3xl opacity-30 capitalize">
            building number and street name
          </span>
          <span className="text-3xl opacity-30 capitalize">address state</span>
          <span className="text-3xl opacity-30 capitalize">Code Country</span>
        </div>

        <div className="w-full md:w-auto flex flex-col grow-[2] items-start justify-start content-start gap-7">
          <div
            className={`text-colorful text-sm md:text-base uppercase mb-5 font-semibold`}
          >
            / FOLLOW US
          </div>
          <div className="grow flex flex-row nowrap gap-3">
            {socialMedia.map((sm, indx) => (
              <Link
                key={`${sm.name}_${indx}`}
                href={sm.href}
                className="transition-all ease-in-out duration-300 capitalize text-2xl md:px-2
                 text-primary opacity-30 hover:opacity-100"
              >
                {sm.icon}
              </Link>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex flex-col sm:flex-row flex-nowrap">
            <label htmlFor="email" className="sr-only">
              email address
            </label>
            <input
              id="email"
              name="email"
              className="w-full py-3 px-5 bg-black opacity-30 outline-none"
              placeholder="Email Address"
              onChange={handleChange}
              value={email}
            />
            <button
              className="w-full p-4 uppercase bg-colorful text-sm"
              onClick={handleClick}
            >
              subscribe
            </button>
          </div>
        </div>

        {/* scroll down button */}
        <div className="static grow md:absolute md:bottom-10 md:-right-20">
          <a
            href="#intro"
            className="group/scrollup scroll-smooth text-primary cursor-pointer flex justify-center items-center 
              flex-col nowrap gap-32"
          >
            <span
              className="relative opacity-30 text-sm duration-500 py-5 text-primary uppercase hidden rotate-180 md:block
              after:content-[''] after:absolute after:h-[100px] after:w-[2px]
              after:bg-secondary after:bottom-full after:left-1/2 after:opacity-30"
              style={{ writingMode: "vertical-lr" }}
            >
              scroll down
            </span>
            <div className="relative w-[42px] h-[42px] flex justify-center items-center rounded-full bg-black md:w-[48px] md:h-[48px] overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-full bg-white transform translate-y-full transition-transform duration-500 ease-in-out group-hover/scrollup:translate-y-0" />
              <ArrowUpwardIcon className="relative z-10 text-primary group-hover/scrollup:text-secondary transition-all duration-500" />
            </div>
          </a>
        </div>

        <div className="text-primary opacity-30 w-full text-sm">
          Copyright ©2024 All rights reserved.
        </div>
      </div>
      {/* END: CONTACT INFO */}
    </footer>
  );
};
