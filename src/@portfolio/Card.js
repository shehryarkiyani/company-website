import React from 'react'

const Card = ({desc,title,img}) => {
  return (
    <div className='flex flex-col  h-full text-center w-[250px] justify-center items-center ' data-aos="zoom-in" data-aos-duration="2000">
          <div className={` w-[200px] h-[200px] rounded-full overflow-hidden first-line mb-3`}>
            <img src={img} className='w-full h-full'/>
          </div>
          <div className='mt-2 flex flex-col'>
          <h1 className='text-[17px] mb-3 '>{title}</h1>
          <p className='text-[14px]'> 
         {desc}
          </p>
          </div>
        </div>
  )
}

export default Card