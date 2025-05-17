import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-purple-50 shadow-lg p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-gray-400 font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-gray-800 tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-gray-800 font-medium text-[16px]">
            <span className="text-blue-500">@</span> {name}
          </p>
          <p className="mt-1 text-gray-500 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={` bg-gray-100 p-16`}>
      <div
        className={`bg-gradient-to-br from-gray-800 to-purple-600 rounded-2xl  min-h-[300px]`}
      >
        <motion.div variants={textVariant()} className="p-8">
          <p className={`text-gray-400 sm:text-[28px] text-[24px] sm:font-bold uppercase tracking-wider`}>What others say</p>
          <h2 className={`text-gray-300 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
