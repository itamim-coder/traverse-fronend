import Image from "next/image";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import icon1 from "../../../../public/assets/IntroOne/icon.png";
import icon2 from "../../../../public/assets/IntroOne/icon1.png";
import icon3 from "../../../../public/assets/IntroOne/school-bus.png";
import icon4 from "../../../../public/assets/IntroOne/atom.png";

const introData = [
  {
    image: icon1,
    title: "500+ Destinations",
    description:
      "The publisher has released a book of the 500 best places to visit in the world - and it's given us a serious case of wanderlust",
  },
  {
    image: icon2,
    title: "Discover",
    description:
      "If you want to visit some of mid Adriatic islands, you have plenty of boats to choose from, including speedboats, big boats, and sailboats",
  },
  {
    image: icon3,
    title: "Book Your Trip",
    description:
      "The publisher has released a book of the 500 best places to visit in the world - and it's given us a serious case of wanderlust",
  },
  {
    image: icon4,
    title: "Global Support",
    description:
      "If you want to visit some of mid Adriatic islands, you have plenty of boats to choose from, including speedboats, big boats, and sailboats",
  },
];

const IntroOne = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-evenly md:px-20 py-10">
      {introData.map((data, index) => (
        <div className="grid place-items-center text-center" key={index}>
          <Image src={data.image} alt="me" width="64" height="64" />
          <h1 className="py-3 font-bold text-xl">{data.title}</h1>
          <p className="text-center text-slate-600">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IntroOne;
