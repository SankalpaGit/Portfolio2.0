import React from "react";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="bg-gray-100 p-16">
      <p className="text-center text-5xl text-gray-700 font-bold mb-16">Tools and Technology</p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
