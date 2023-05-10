import React from 'react'

export const Testimonials = () => {
    const testimonials = [
        {
          testimonial:
            "I thought it was impossible to make a website as beautiful as our product",
          name: "Sara Lee",
          designation: "CFO",
          company: "Acme Co",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
          testimonial:
            "I've never met a web developer who truly cares about their clients' success",
          name: "Chris Brown",
          designation: "COO",
          company: "DEF Corp",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
          testimonial:
            "After they optimized our website, our traffic increased by 50%. Thanks CrobotIT",
          name: "Lisa Wang",
          designation: "CTO",
          company: "456 Enterprises",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
        },
      ];
  return (
    <div className='mt-10' id="testimonials">
        <h2 className='text-[20px] md:text-3xl  text-center text-primary font-bold' >Testimonials</h2>
 <div className='max-w-7xl  h-full mx-auto pl-2 pr-2 flex justify-center items-center align-middle text-center '>
 <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-10 justify-items-center'>

{testimonials.map((item)=>{
    return(
        <>
         <div className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full  shadow-2xl' data-aos="zoom-in" data-aos-duration="2000">
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{item.testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {item.name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {item.designation} of {item.company}
          </p>
        </div>

        <img
          src={item.image}
          alt={`feedback_by-${item.name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
    </div>
        </>
    )
})}
   
 </div>

        </div>
        </div>
   
  )
}

 