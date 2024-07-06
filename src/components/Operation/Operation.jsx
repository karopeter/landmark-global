import React from 'react'
import "./Operation.css";

const Operation = ({imageSrc, method}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-20">
    <div className="col-span-1 mt-10 md:col-span-1">
    <h1 className="mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{method}</h1>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      We share our clients' entrepreneurial spirit and ambition with 
       <br />
      the strength and depth of a global e-logistics operator
      </p>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
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