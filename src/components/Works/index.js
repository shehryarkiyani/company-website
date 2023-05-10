import React from 'react'
import work1 from '../../assets/images/work1.jpg'
import work2 from '../../assets/images/work2.png'
import work3 from '../../assets/images/work3.png'
export const Work = () => {
  return (
    <div className='mt-10 bg-primary relative  w-full pb-10 z-[0]  pt-10'>
        <h2 className='text-[20px] md:text-3xl  text-center text-[white] font-bold' data-aos="fade-up" data-aos-duration="2000">
            Our Work
        </h2>
  <div className='max-w-7xl  h-full mx-auto     grid grid-cols-3 gap-20 '>
 
<div className='flex flex-col gap-2 items-center mt-10' data-aos="zoom-in" data-aos-duration="2000">
<div className='overflow-hidden'>
<img src={work1} className='w-[300px] h-[300px]'/>
</div>
<p className='text-[white] text-xl text-center'>Anime</p>
</div>
<div className='flex flex-col gap-2 items-center mt-10' data-aos="zoom-in" data-aos-duration="2000">
<div className='overflow-hidden'>
<img src={work2} className='w-[300px] h-[300px]'/>
</div>
<p className='text-[white] text-xl text-center'>Latest Deals</p>
</div>
<div className='flex flex-col gap-2 items-center mt-10' data-aos="zoom-in" data-aos-duration="2000">
<div className=' overflow-hidden'>
<img src={work3} className='w-[300px] h-[300px]' />
</div>
<p className='text-[white] text-xl text-center'>Round Table</p>
</div>


  </div>

    </div>
  )
}

