"use client";
// import React from "react";
import Link from "next/link";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  let [showmenu, setShowMenu] = useState("hidden");
  const [currentSlide, setCurrentSlide] = useState(0);

  const onClickMenu = () => {
    showmenu === "hidden" ? setShowMenu("block") : setShowMenu("hidden");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  const textAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="w-full h-9 bg-[#fcf7db] flex gap-2 text-black items-center justify-center ">
        <Image
          width="30"
          height="30"
          src="/icons8-box-important-50.png"
          alt="box-important--v1"
        />
        <div>
          NOW{" "}
          <a
            className="decoration-stone-800 decoration-1 underline  decoration-solid"
            href="https://www.uavio.in/about-uavio/"
          >
            UAVIO LABS
          </a>{" "}
          IS AVIO DRONES
        </div>
      </div>
      <nav className="bg-[#000d12] w-full h-auto sm:h-[46px] sticky top-0 r-0 l-0 z-50 text-[17px]  sm:flex sm:items-center sm:justify-between">
        <div className="mt-0 mx-auto w-full max-w-[1024px] px-[25px] pt-[2px] font-normal text-[#ffffff]">
          <ul className=" w-full h-10 flex justify-between sm:justify-normal  items-center text-[12px] sm:gap-[10vw] select-none">
            <li className="cursor-pointer">
              <Image className="h-[40px] sm:h-[44px]" src="/Avio - Logo1.png" width="44" height="42" />
            </li>
            <li className="sm:hidden text-center text-2xl py-3 mr-[30px]">
              <button
                onClick={onClickMenu}
                className="block hover:text-white focus:text-white focus:outline-none"
              >
                {/* <i class="fa-sharp fa-solid fa-bars" style={{ color: "#2c2c2c" }}>
              </i> */}
                =
              </button>
            </li>
            <div className={`hidden items-center sm:flex  w-full sm:justify-between text-[12px]`}>
              <li className={`cursor-pointer`}>Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Industrial Applications</li>
            </div>
          </ul>
          <div className={`${showmenu}  items-center sm:hidden sm:gap-[11px] lg:pr-[20px]  lg:gap-[32px] px-5 pb-4 xl:px-[120px] `}>
          <Link
            className={`block py-1 rounded  mt-1  transition-colors duration-300 `}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`block py-1 rounded  mt-1  transition-colors duration-300 `}
            href="/"
          >
            About Us
          </Link>
         
          <Link
            className={`block py-1 rounded  mt-1  transition-colors duration-300 `}
            href="/"
          >
            Contact
          </Link>
          <Link
            className={`block py-1 rounded  mt-1 transition-colors duration-300 `}
            href="/"
          >
            Industrial Applications
          </Link>

         

          
        </div>
        </div>
      </nav>
      <main>
        <Slider {...sliderSettings}>
          {sliderContent.map((content, index) => (
            <div key={index} className="relative">
              <Image
              alt="drone"
                className="w-full h-[60vw] md:h-[48vw]"
                src={content.image}
                width="1000"
                height="809"
              />
              <AnimatePresence>
                {currentSlide === index && (
                  <motion.div
                    key={index}
                    className="  absolute text-center top-[40vw] md:top-[30vw] mx-auto w-full z-10"
                    initial="hidden"
                    animate="visible"
                    variants={textAnimation}
                    exit="hidden"
                  >
                    <h2 className="text-[#12273b]  font-bold text-shadow text-[7vw] lg:text-[6vw]">
                      {content.title}
                    </h2>
                    <div className="text-[#12273b]  font-bold text-shadow text-[2vw]">
                      <a href={content.learnMoreLink}>Learn More </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Slider>
      </main>
    </>
  );
}

// Sample content for each slide
const sliderContent = [
  {
    image: "/Zeta-1.png",
    title: "ZETA-1",
    learnMoreLink: "/zeta-1",
  },
  {
    image: "/Xera-1.jpeg",
    title: "XERA-1",
    learnMoreLink: "/xera-1",
  },
  // Add more slides as needed
];
