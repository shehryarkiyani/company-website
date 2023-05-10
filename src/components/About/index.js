import React from 'react'
import AboutBanner from "../../assets/images/about-banner.png"
export const About = () => {
  return (
    <div className='mt-10'>
         <h2 className='text-[20px] md:text-3xl  text-center text-primary font-bold ' data-aos="fade-up" data-aos-duration="2000">About Us</h2>
        <div className='max-w-7xl  h-full mx-auto pl-2 pr-2  grid justify-between items-center align-middle sm:grid-cols-1 md:grid-cols-2   gap-10 '>
      <div className='w-[100%] h-auto  ' data-aos="slide-right" data-aos-duration="2000">
    <img src={AboutBanner} className='w-full ' alt='about-banner'/>
      </div>
      <div className='flex flex-col gap-3' data-aos="fade-up" data-aos-duration="2000">
     <h3 className='text-[17px]' >At <b className='text-primary '>CrobotIT Solutions</b>, we are a global creative agency that combines design expertise, technology, and intelligence to revolutionize your business. We specialize in creating innovative software solutions that help businesses succeed in the digital world</h3>
     <h3 className='text-[17px]' >Our team of <b className='text-primary '>experienced developers and designers</b>  work together to craft unique solutions that are tailored to meet your specific needs. We take the time to understand your business and your goals so that we can create software solutions that not only meet your needs but exceed your expectations</h3>
      </div>
        </div>
    </div>
  )
}

