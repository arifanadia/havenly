import React from "react";
import SelectInput from "./custom-ui/select-Input";
import Image from "next/image";

const HeroForm = () => {
  return (
    <div className="bg-white max-w-6xl mx-auto rounded-2xl p-12">
      <form className="flex justify-between">
        <SelectInput
          label="Location"
          options={[
            { value: "new-york", label: "New York" },
            { value: "san-francisco", label: "San Francisco" },
            { value: "los-angeles", label: "Los Angeles" },
          ]}
          defaultValue="new-york"
          icon="/location.svg"
        />

        <SelectInput
          label="Property Type"
          options={[
            { value: "apartment", label: "Apartment" },
            { value: "house", label: "House" },
            { value: "villa", label: "Villa" },
          ]}
          defaultValue="house"
          icon="/home.svg"
        />
        <SelectInput
          label="Price Range"
          options={[
            { value: "0-1000", label: "$0 - $1000" },
            { value: "1000-5000", label: "$1000 - $5000" },
            { value: "5000-10000", label: "$5000 - $10000" },
            { value: "10000+", label: "$10000+" },
          ]}
          defaultValue="1000-5000"
          icon="/dollar.svg"
        />
        <button type="submit" className="bg-black h-12 w-20 rounded-3xl">
          <Image src={"/search.svg"} alt="search" width={33} height={33} className="search-icon w-8 mx-auto " />
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
