import React from "react";
import world from "../../../../public/assets/IntroTwo/world-img.png";
import Image from "next/image";

const IntroTwo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
      <div className=" p-4">
        <h1 className="text-lg font-semibold text-blue-900">Them Best Great Tourism is Right Here</h1>
        <br />
        <p className="font-semibold text-slate-500">Better Travel Packages like any other</p>
        <div className="border-b border-orange-400 my-2"></div>
        <br />
        <p className="text-slate-500"> 
          Dummy text ever since the 1500s, when an unknown printer took. A
          galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries. Dummy text ever since the 1500s,
          when an unknown printer took. A galley of type.
        </p>

      </div>
      <div className=" p-4 grid place-items-center text-center">
        <Image
          className="animate-spin-slow"
          src={world}
          alt="me"
          layout="responsive"
          width="100"
          height="100"
        />
        <h1 className="text-lg font-semibold text-blue-900 mt-10">Travel through the Amazing</h1>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold text-blue-900">Our Awards</h1>
        <p className="text-slate-500"> 
          Dummy text ever since the 1500s, when an unknown printer took. A
          galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries. Dummy text ever since the 1500s,
          when an unknown printer took. A galley of type. Scrambled it to make a
          type specimen book.
        </p>

      </div>
    </div>
  );
};

export default IntroTwo;
