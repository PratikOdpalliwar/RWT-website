import React from 'react'
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen ">
      <motion.img
        className='absolute inset-0 w-full h-full object-cover transform scale-x-[-1]'
        src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute left-0 p-10 text-white max-w-md md:mx-12 lg:mx-20">
        <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Transforming Ideas into Digital Solutions
        </motion.h1>
        <motion.p className="text-lg md:text-xl lg:text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          We specialize in providing cutting-edge IT solutions tailored to your unique business needs. From web development and mobile apps to cloud services.
        </motion.p>
        {/* <motion.a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Get Started
        </motion.a> */}
      </div>
    </div>
  )
}

export default HeroSection
