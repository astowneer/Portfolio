import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGeneratedEffect'
import MagicButton from './ui/MagicButton'

const Hero = () => {
  return (
    <div className="h-[40rem] max-md:h-fit w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden" id="about">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="max-sm:h-[20rem] p-4 max-w-6xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="max-sm:text-4xl max-md:text-5xl text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Drobidko Vladyslav <br /><span className='text-purple'>Full Stack Javascript Developer</span>
        </h1>

        <TextGenerateEffect
          words="I build powerful, modern full-stack applications using cutting-edge JavaScript technologies. Whether you need a stunning blog, a dynamic task manager, or a high-performance e-commerce platform. No matter the complexity, I create sleek, scalable, and user-friendly web solutions tailored to your needs."
          className="mt-4 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto max-md:hidden"
        />

        <div className='flex justify-center max-md:py-5'>
          <a href="#projects">
            <MagicButton title="Show my works" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;