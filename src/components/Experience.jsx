import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

// Utility function for random float animation
const generateFloatAnim = () => ({
  y: [0, Math.random() * 20 - 10, 0],
  x: [0, Math.random() * 20 - 10, 0],
});

const generateTransition = (delay = 0) => ({
  duration: 4 + Math.random() * 2,
  repeat: Infinity,
  ease: "easeInOut",
  delay,
});

// 🎈 Reusable Floating Decor
const FloatingDecor = ({ count = 5 }) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = `${14 + Math.random() * 12}px`;
    const position = {
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
    };
    const bgColor = i % 2 === 0 ? "bg-purple-400" : "bg-pink-400";

    return (
      <motion.div
        key={i}
        className={`absolute ${bgColor} opacity-20 rounded-full`}
        style={{
          width: size,
          height: size,
          top: position.top,
          left: position.left,
        }}
        animate={generateFloatAnim()}
        transition={generateTransition(i * 0.5)}
      />
    );
  });
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        padding: "0",
        border: "none",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid #e5e7eb" }}
      date={experience.date}
      dateClassName="text-xl text-black font-bold px-2 py-1"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full bg-transparent h-full rounded">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >

      <motion.div
        className="relative  p-[2px] rounded-xl transitionduration-300"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        <div className="relative rounded-xl p-6 bg-gradient-to-br from-gray-200 to-purple-300
">

          <FloatingDecor count={15} />

          <h3 className="text-gray-800 text-[24px] font-bold">
            {experience.title}
          </h3>
          <p className="text-gray-600 text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>

          <ul className="mt-5 list-disc ml-5 space-y-2 z-10 relative">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-gray-700 text-[14px] pl-1 tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};




const Experience = () => {
  return (
    <div className="bg-gray-50 px-6 py-20 sm:px-12 lg:px-32" id="experience">
      <style>
        {`
          .vertical-timeline::before {
            background: #d1d5db !important;
          }
        `}
      </style>

      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={`${styles.sectionSubText} text-center text-xl text-gray-500 mb-2`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-4xl font-extrabold text-gray-800`}>
          Work Experience
        </h2>
      </motion.div>

      <motion.div
        className='mt-16 flex flex-col'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}

        </VerticalTimeline>
      </motion.div>
    </div>
  );
};


export default Experience;
