import React from "react";
import CountUp from "react-countup";

const CountUpCustom = ({ value, title1, title2 }: { value: number; title1: string ,title2:string }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-1 text-4xl md:text-5xl font-semibold text-secondary -ml-2 text-center">
        <CountUp start={0} end={value} duration={2.75} delay={1.5} />
        <span>K+</span>
      </div>
      <p className="capitalize text-center text-xl mt-4"> {title1} <br /> {title2}</p>
    </div>
  );
};

export default CountUpCustom;
