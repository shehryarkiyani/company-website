import React from 'react'
import footerlogo from "../../assets/images/MyLogo.png"
import Linkedin from "../../assets/images/linked-in.svg"
import Twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import insta from "../../assets/images/insta.svg"
import {Link} from 'react-router-dom'
export const Footer = ({scrollToSection}) => {
  return (
    <div className='w-full relative bg-[#1d1d1d] pt-[50px] mt-[50px]'>
     
      <div className='max-w-7xl h-full mx-auto pl-2 pr-2'>
        <div className='pb-[50px] md:pl-[20px] lg:pl-0  '>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            <div className=''>
              <div className='flex flex-col'>
              <h2 className='text-[white] text-[2rem]'>Main Links</h2>
              
              <div className='flex flex-col justify-between gap-3 mt-4  '>
             
              <a className='text-[1rem] text-[white]' href="#about" onClick={()=>scrollToSection('about')}>About</a>
              <a className='text-[1rem] text-[white]' to="#services" onClick={()=>scrollToSection('services')}>Services</a>
              <a className='text-[1rem] text-[white]' to="#work" onClick={()=>scrollToSection('work')}>Work</a>
              <a className='text-[1rem] text-[white]' to="#testimonials" onClick={()=>scrollToSection('testimonials')}>Testimonials</a>
              </div>
              </div> 
            </div>
            <div className=''>
            <h2 className='text-[white] text-[2rem]'>Get In Touch</h2>
              <div className='flex flex-col justify-between gap-3 mt-4'>
              <div className="text-[white] flex  items-center">Email : 
              <div className="ml-[10px] space-x-4">
             
              crobotit@gmail.com
              </div>
              </div>
              <div className="text-[white] flex  items-center">Phone : 
              <div className="ml-[10px] space-x-4">
              +923315866992<br/>
              +923165417171
              </div>
              </div>
           
             
           
              </div>
              
            </div>
            <div className=''>
            <h2 className='text-[white] text-[2rem]'>Social Contact</h2>
              <div className='flex  justify-between items-center w-[160px] mt-5'>
              
              <img src={facebook} className='w-[20px] h-[20px]'/>
              <img src={Linkedin} className='w-[20px] h-[20px]'/>
              <img src={insta} className='w-[20px] h-[20px]'/>
              <img src={Twitter} className='w-[20px] h-[20px]'/>
              </div>
              
            </div>
          </div>

        </div>
      <div className='border-t-[#E5E5EA] border-t-[1px] text-center text-[16px] flex justify-center align-middle pt-[20px] pb-[20px] text-[white]'>
    Copyright @ CrobotIT 2023. All Rights Reserved.
    </div>
      </div>
      
    </div>
  )
}

