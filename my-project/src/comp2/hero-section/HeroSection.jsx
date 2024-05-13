import React from 'react'
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col md:flex-row"> {/* Added mt-16 for top margin */}
      <motion.img
        className='absolute top-0 left-0 w-full h-full object-cover'
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div className="absolute left-0 p-10 text-white max-w-md"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 className="text-4xl md:text-4xl lg:text-5xl font-sans font-extrabold mb-4 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Transforming Ideas into Digital Solutions
        </motion.h1>
        <motion.p className="text-lg md:text-base lg:text-lg mb-6 text-black"
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

      </motion.div>
    
      <div className="absolute right-0 p-10">
        {/* <aside class="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono h-52">
  <div class="flex justify-between items-center">
    <div class="flex space-x-2 text-red-500">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <p class="text-sm">bash</p>
  </div>
  <div class="mt-4">
    <p class="text-green-400">$ npm install next</p>
    <p class="text-white">+ next@10.2.3</p>
    <p class="text-white">added 1 package, and audited 2 packages in 3s</p>
    <p class="text-green-400">$</p>
  </div>
</aside> */}
 </div>
    </div>
  )
}

export default HeroSection
