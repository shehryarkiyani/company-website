import React,{useEffect} from 'react'
import { Header } from '../../components/Headers'
import {Footer} from "../../components/Footer"
import {Hero} from "../../components/Hero"
import {About} from "../../components/About"
import {Services} from "../../components/Services"
import { Work } from '../../components/Works'
import logo from "../../assets/images/MyLogo.png"
import { Link } from 'react-router-dom'
import {Testimonials} from "../../components/Testimonials"
import AOS from 'aos';
export const Home = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className=''>
          <Header scrollToSection={scrollToSection}/>

    
      <div className='mt-[85px] '>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Testimonials/>
        <Footer scrollToSection={scrollToSection}/>
      </div>
      
    </div>
  )
}

