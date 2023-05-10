import React,{useEffect} from 'react'
import { Header } from '../../components/Headers'
import {Footer} from "../../components/Footer"
import {Hero} from "../../components/Hero"
import {About} from "../../components/About"
import {Services} from "../../components/Services"
import { Work } from '../../components/Works'
import logo from "../../assets/images/MyLogo.png"
import { Link } from 'react-router-dom'
import AOS from 'aos';
export const Home = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className=''>
          <Header/>

    
      <div className='mt-[85px] '>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
        <Footer/>
      </div>
      
    </div>
  )
}

