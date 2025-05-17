import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: "your email",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className=' flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-gray-50 p-16'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-8 rounded-2xl shadow-md'
      >
        <p className='text-gray-500 text-[14px] uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-black text-[32px] font-bold'>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-gray-800 font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-gray-100 py-4 px-6 placeholder:text-gray-400 text-gray-800 rounded-lg outline-none border border-gray-300 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-800 font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-gray-100 py-4 px-6 placeholder:text-gray-400 text-gray-800 rounded-lg outline-none border border-gray-300 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-800 font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-gray-100 py-4 px-6 placeholder:text-gray-400 text-gray-800 rounded-lg outline-none border border-gray-300 font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 transition-colors py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-transparent'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
