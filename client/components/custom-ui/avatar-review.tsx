import Image from "next/image";
import React from "react";

const AvatarReview = () => {

  const avatars = [
    { src: "/review/review1.jpg", alt: "review1" },
    { src: "/review/review2.jpeg", alt: "review2" },
    { src: "/review/review4.jpeg", alt: "review4" },
    { src: "/review/review3.jpg", alt: "review3" },
  ];

  const positions = ["left-0", "left-10", "left-20", "left-28"];

  return (
    <div className="bg-white rounded-full p-4 w-[350px] h-20">
      <div className="relative -mt-2">
        {/* Map through the avatars array */}
        {avatars.map((avatar, index) => (
          <Image
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            height={80}
            width={80}
            className={`rounded-full object-cover size-[60px] border-4 border-white absolute z-${
              50 - index * 10
            } ${positions[index]}`}
          />
        ))}

        {/* Count Circle */}
        <div className="bg-gray-400 w-14 h-14 absolute z-10 left-40 rounded-full flex items-center justify-center">
          <span className="text-xl text-white font-semibold">+2</span>
        </div>

        {/* Button */}
        <button className="text-black text-xl font-semibold leading-snug absolute z-10 left-52">
          Check reviews
        </button>
      </div>
    </div>
  );
};

export default AvatarReview;
