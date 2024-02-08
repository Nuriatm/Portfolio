"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';


const HeroSection = () => {
  return (
    <section>  
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-secondary-700">
                Hello, I&apos;m {""} 
                </span>
                <br></br>

    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Nuria',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        2000,
        'Front-end',
        2000,
        'UI/UX',
        2000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />

    </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> 
        As a Systems Analysis and Development student, my current focus lies in mastering front-end development. 
       <br></br>
       <br></br>
       When not coding, you&apos;ll find me brainstorming solutions to coding challenges or planning my next project. 
        </p>
        <div>
        <button 
        className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-700 via-primary-900 to-secondary-700 hover:bg-slate-200 text-white"
        onClick={() => window.open("https://www.linkedin.com/in/nuria-toledo-martins-94a69b240/", "_blank")}
        >
           Hire Me
        </button>

        <button 
        className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-700 via-primary-900 to-secondary-700 hover:bg-slate-800 text-white mt-3"
        onClick={() => window.open("https://wa.me/5516996109672", "_blank")}
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Contact Me</span>
          </button>
        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image 
    src="/images/hero-image.png"
    alt="hero image"
    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    width={300}
    height={300} 
    />
    </div>
    </motion.div>
    </div>    
    </section>
  )
}

export default HeroSection;