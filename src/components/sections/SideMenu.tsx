"use client";
import Link from "next/link";
import { useContext, useRef } from "react";
import { MenuContext } from "@/context/context";

import { sideLinks, socialMedia } from "@/utils/common";
import { useOnClickOutside } from "usehooks-ts";

export const SideMenu: React.FC = () => {
  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const menuContext = useContext(MenuContext);

  const isOpen = menuContext?.isOpen || false;
  const setIsOpen = menuContext?.setIsOpen || (() => {});

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useOnClickOutside(sideMenuRef, handleCloseMenu);

  //   if (!isOpen) return null;

  return (
    <div
      ref={sideMenuRef}
      className={`fixed z-50 w-72 h-screen top-0 p-9 bg-[#0c0c0c] flex flex-col justify-start items-start duration-700
            ease ${isOpen ? "right-0" : "-right-80"}`}
    >
      {/* close button & header*/}
      <div
        className={`text-colorful w-full text-base uppercase mb-5 font-semibold flex flex-row flex-nowrap 
            items-center justify-between duration-500 ease-in delay-700
            ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
      >
        TRANSCEND STUDIO
        <div
          onClick={() => handleCloseMenu()}
          className="w-10 h-10 text-primary cursor-pointer relative"
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 block h-0.5 w-4 bg-secondary -rotate-45"></span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 block h-0.5 w-4 bg-secondary rotate-45"></span>
        </div>
      </div>

      {/* links */}
      <div
        className={`w-full my-9 border-t-2 border-white/20 duration-500 ease-in delay-700
            ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
      >
        {sideLinks.map((l, i) => (
          <a
            href={`#${l.href}`}
            key={`${l.header}_${i}`}
            className="group/link flex flex-row flex-nowrap gap-5 scroll-smooth justify-start items-center py-3 border-b-2 border-white/20"
          >
            <span className="text-[11px] ml-2 text-white/25 group-hover/link:text-colorful/100 duration-700">
              0{++i}
            </span>
            <span className="capitalize text-primary text-base">
              {l.header}
            </span>
          </a>
        ))}
      </div>

      {/* some info */}
      <div
        className={`text-[13px] text-white/30 mb-7 duration-500 ease-in delay-700
            ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
      >
        Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
        <span className="text-white/70 hover:text-white/100 duration-500">
          voluptatem{" "}
        </span>
        porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
        neque reprehenderit.
      </div>

      {/* social menia links */}
      <div
        className={`flex flex-row flex-nowrap justify-center items-start gap-3 duration-500 ease-in delay-700
            ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
      >
        {socialMedia.map((sm, indx) => (
          <Link
            key={`${sm.name}_${indx}`}
            href={sm.href}
            className="relative transition-all ease-in-out duration-300 capitalize text-sm text-white/50 hover:text-white/100"
          >
            {sm.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
