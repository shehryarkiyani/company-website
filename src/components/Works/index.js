import React from 'react'
import work1 from '../../assets/images/jobit.png'
import work2 from '../../assets/images/tripguide.png'
import work3 from '../../assets/images/carrent.png'

export const Work = () => {
  return (
    <div className='mt-10 bg-primary relative  w-full pb-10 z-[0]  pt-10' id="work">
        <h2 className='text-[20px] md:text-3xl  text-center text-[white] font-bold' data-aos="fade-up" data-aos-duration="2000">
            Our Work
        </h2>
        <div className='max-w-7xl  h-full mx-auto'>
       <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-10 justify-items-center'>
       <div className='p-5 bg-[white] rounded-2xl sm:w-[360px] w-[360px] ' data-aos="zoom-in" data-aos-duration="2000">
          <div className='relative w-full h-[230px]'>
            <img
            src={work1}
            alt="work1"
            className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>Job IT</h3>
          <p className='mt-2 text-secondary text-[14px]'>Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.</p>
        </div>
        </div>
        <div className='p-5 bg-[white] rounded-2xl sm:w-[360px] w-[360px] ' data-aos="zoom-in" data-aos-duration="2000">
          <div className='relative w-full h-[230px]'>
            <img
            src={work2}
            alt="work1"
            className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>Trip Guide</h3>
          <p className='mt-2 text-secondary text-[14px]'>A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.</p>
        </div>
        </div>
        <div className='p-5 bg-[white] rounded-2xl sm:w-[360px] w-[360px] ' data-aos="zoom-in" data-aos-duration="2000">
          <div className='relative w-full h-[230px]'>
            <img
            src={work3}
            alt="work1"
            className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>Car Rent</h3>
          <p className='mt-2 text-secondary text-[14px]'>Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.</p>
        </div>
        </div>
       </div>
        </div>
       
      
  

    </div>
  )
}

