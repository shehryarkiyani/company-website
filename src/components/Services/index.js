import React from 'react'
import uiux from "../../assets/images/typeface.png"
import Card from '../../@portfolio/Card'
import frontend from "../../assets/images/front-end.png"
import backend from "../../assets/images/backend.jpg"
import mobileapp from "../../assets/images/mobile-app.jpg"
export const Services = () => {
  return (
    <div className='mt-10' id="services">
       <h2 className='text-[20px] md:text-3xl  text-center text-primary font-bold' data-aos="fade-up" data-aos-duration="2000">Services</h2>
       <div className='max-w-7xl  h-full mx-auto pl-2 pr-2'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8  md:gap-4 lg:gap-4       mt-8 justify-items-center'>
        <Card img={uiux} title={"UI/UX Designing"} desc={"We focus on creating designs that put your users first. Our user-centric approach means we prioritize visual elements that make it easy for users to interact with platform.Let us help you transform your digital presence today  "}/>
        <Card img={frontend} title={"Front-end Development"} desc={"We offer top-notch Front-end Development services to help you create stunning, user-friendly websites. Our team uses the latest tools and technologies to build custom solutions that meet your specific needs  "}/>
        <Card img={backend} title={"Back-end Development"} desc={"We specialize in Backend Development services to help you build powerful, scalable, and secure web applications. Our team uses the latest technologies to create custom solutions that meet your specific business needs."}/>
        <Card img={mobileapp} title={"Mobile App Development"} desc={"We offer Mobile Application development services to help you build  engaging mobile experiences for your customers. Our team uses the latest tools and technologies to create custom applications that are fast, reliable, and user-friendly."}/>
       
        </div>
      
       </div>
    </div>
  )
}
