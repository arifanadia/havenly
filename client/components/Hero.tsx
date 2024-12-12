"use client";
import Image from "next/image";
import React from "react";

import ShimmerBtn from "./ui/shimmerBtn";

import HeroForm from "./Hero-Form";
import { FaArrowRightLong } from "react-icons/fa6";
import CountUpCustom from "./custom-ui/countup";
import AvatarReview from "./custom-ui/avatar-review";

const Hero = () => {
  return (
    <section className="w-full min-h-[810px] bg-primary px-6 py-16 relative ">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-44 w-full">
        {/* hero content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-black leading-snug">
            Let's Build <br />
            <span className="flex gap-2 items-center">
              Your <span className="block w-full h-1 bg-orange-500 mt-4"></span>
            </span>{" "}
            Dream House
          </h1>
          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <ShimmerBtn title={"find property"} />
            <button className="btn group flex gap-2 justify-center items-center bg-white text-black border-2 border-slate-300 hover:text-secondary hover:bg-transparent">
              Explore{" "}
              <FaArrowRightLong className="text-sm text-secondary opacity-0 group-hover:opacity-100 group-hover:text-xl transition-opacity duration-300" />
            </button>
          </div>

          {/* CountUp*/}

          <div className="flex gap-12 mt-12">
            <CountUpCustom value={43} title1={"Regular"} title2={"Customers"} />
            <CountUpCustom
              value={203}
              title1={"Projects"}
              title2={"Completed"}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-24 bottom-44">
            <AvatarReview />
          </div>
          <Image src={"/hero.png"} alt="hero" width={600} height={800} className="-z-50" />
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 z-[100]">
        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;
