import React,{useState,useEffect} from 'react'
import AOS from 'aos';
export const Hero = () => {
  return (
    <div className='bg-primary relative  w-full h-[500px] z-[0]  '>
      <div className='max-w-7xl  h-full mx-auto pl-2 pr-2 flex justify-center items-center align-middle text-center '>
        <div className='flex flex-col gap-3 w-full justify-center items-center'>
          <h2 className='text-[20px] md:text-3xl w-[80%] text-center text-[white] font-bold' data-aos="slide-right">At CrobotIT Solutions, we specialize in crafting project-specific solutions with expertise</h2>
        <p className='text-[white] w-[80%] ' data-aos="slide-left">As a creative company, we prioritize establishing long-term relationships with our customers to ensure we exceed their expectations and help them succeed in the digital world.</p>
        </div>
      </div>
    </div>
  )
}

