"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { useInView } from "react-intersection-observer";

import ReactSlider from "react-slick";

import { opinions, images } from "@/utils/common";

export const FeaturedWorks: React.FC = () => {
  const { width } = useWindowSize();

  const [headerRef, headerIsVisible] = useInView({
    triggerOnce: true,
    delay: 300,
  });

  const [imagesRef, imagesIsVisible] = useInView({
    triggerOnce: true,
    delay: 300,
  });

  const [clientsRef, clientsIsVisible] = useInView({
    triggerOnce: true,
    delay: 300,
  });

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  useEffect(() => {
    setSliderSettings((prevSettings) => ({
      ...prevSettings,
      slidesToShow: width > 600 ? 2 : 1,
    }));
  }, [width]);

  return (
    <section
      id="featured"
      className="w-full bg-white flex flex-col justify-center items-center py-20 md:pt-44 md:pb-44"
    >
      {/* START */}
      {/* HEADER */}
      <div
        ref={headerRef}
        className={`w-10/12 mb-24 duration-700 ${
          headerIsVisible ? "opacity-100" : "opacity-0"
        } ${headerIsVisible ? "translate-y-0" : "translate-y-12"}`}
      >
        <div
          className={`text-colorful text-sm md:text-base uppercase mb-5 font-semibold`}
        >
          / featured works
        </div>
        <h2
          className={`text-secondary text-3xl md:text-6xl font-bold leading-snug`}
        >
          These are some of our recent design projects and we are so excited to
          show them to you.
        </h2>
      </div>
      {/* HEADER */}
      {/* END */}

      {/* --------------------------- */}

      {/* START */}
      {/* IMAGES */}
      <div
        ref={imagesRef}
        className={`w-10/12 mb-32 duration-700 ${
          imagesIsVisible ? "opacity-100" : "opacity-0"
        } ${imagesIsVisible ? "translate-y-0" : "translate-y-12"}`}
      >
        <div className="h-auto md:h-screen w-full flex flex-col flex-wrap justify-center items-center content-center">
          {images.map((image, indx) => (
            <div
              className={`group/image relative w-full md:w-1/3 overflow-clip`}
              style={{
                height: indx === 0 || indx === 3 || indx === 4 ? "55%" : "45%",
              }}
              key={`${image.alt}_${indx}`}
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-white duration-500 opacity-0 
                  group-hover/image:opacity-70 z-20"
              />

              <div
                className="absolute bottom-[20%] left-[10%] flex flex-col capitalize text-secondary font-semibold 
                  text-lg z-30 opacity-0 duration-500 
                  group-hover/image:opacity-100 group-hover/image:bottom-[10%]"
              >
                {image.alt}
                <span className="font-normal text-base">
                  {image.description}
                </span>
              </div>
              <Image
                alt={image.alt}
                src={image.src}
                className={`w-full h-full duration-500 group-hover/image:scale-125 z-10`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* IMAGES */}
      {/* END */}

      {/* --------------------------- */}

      {/* START */}
      {/* CLIENTS SAYING */}
      <div
        ref={clientsRef}
        className={`w-10/12 flex flex-col justify-center items-center duration-700 ${
          clientsIsVisible ? "opacity-100" : "opacity-0"
        } ${clientsIsVisible ? "translate-y-0" : "translate-y-12"}`}
      >
        <h2
          className={`text-secondary text-xl md:text-4xl font-bold leading-snug mb-10 md:mb-14`}
        >
          What Clients Are Saying.
        </h2>

        <div
          className="w-full"
          style={{ borderTop: "1px solid rgba(0, 0, 0, 0.15)" }}
        >
          <ReactSlider {...sliderSettings}>
            {opinions.map((o, indx) => (
              <div
                className="relative text-secondary !flex flex-col md:flex-row flex-nowrap gap-10 pt-11 pr-8"
                key={`${o.name}_${indx}`}
              >
                <div className="w-full h-full">
                  <div
                    className="absolute content-[''] w-[1px] top-0 left-10
                      h-[10%]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                  />

                  {o.avatar ? (
                    <Image
                      alt={o.name}
                      src={o.avatar}
                      className={`relative w-[78px] h-[78px] rounded-full`}
                    />
                  ) : (
                    "no avatar"
                  )}
                </div>

                <div className="h-full text-[#555] text-lg flex flex-col justify-between">
                  <p className="mb-8 leading-8">{o.words}</p>
                  <span className="text-secondary font-bold">{o.name}</span>
                  <span className="text-sm">{o.position}</span>
                </div>
              </div>
            ))}
          </ReactSlider>
        </div>
      </div>
      {/* CLIENTS SAYING */}
      {/* END */}
    </section>
  );
};
