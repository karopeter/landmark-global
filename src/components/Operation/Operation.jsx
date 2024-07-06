import React from 'react'
import "./Operation.css";

const Operation = ({imageSrc, method}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-20">
    <div className="col-span-1 md:col-span-1 p-4 md:p-8 lg:p-20">
    <h2 className='mb-8 mt-5 md:mb-10 md:mt-10 text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>
          {method}
        </h2>
      <p className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
      We share our clients' entrepreneurial spirit and ambition with 
       <br />
      the strength and depth of a global e-logistics operator
      </p>
      <p  className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
      Our proprietary technology, combined with our expertise and 
      <br />
      experience ensures you get the right solution to drive 
       <br />
      business growth.
      </p>
    </div>
    <div className="col-span-1 md:col-span-1">
      <img src={imageSrc} alt="Image" className="object-cover w-full h-full rounded-lg shadow-md" />
    </div>
  </div>
    </div>
  )
}

export default Operation