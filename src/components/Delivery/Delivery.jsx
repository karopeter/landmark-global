import React from 'react'
import "./Delivery.css";

const Delivery = ({imageSrc, method, features}) => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-20">
    <div className="col-span-1 md:col-span-1">
    <h2 className='mb-8 mt-5 md:mb-10 md:mt-10 text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>
          {method}
        </h2>
      <p className='text-lg leading-[34px] md:text-[20px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
      Landmark Global has built an extensive network of international couriers around the world that provides a pleasant delivery experience for your customers. Whether shipping within the USA or Canada, or to countries outside of North America - we have you covered.
      </p>
      <p className='text-lg leading-[34px] md:text-[20px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
      We are the market leader into Canada, the USA’s most important cross-border market, and we are the #1 customer of the Canadian Border Services Agency.
      </p>
      <p className='text-lg leading-[34px] md:text-[20px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
      Your packages will travel from Landmark facilities to Canada on Landmark trucks over the border where our in-house brokerage team clears your items, maintaining control of your shipments throughout the entire clearance process. Once in Canada, our team tenders packages to Landmark facilities located close to your customers, enabling our local couriers make the final delivery.
      </p>
    </div>
    <div className='col-span-1 mt-20 md:col-span-1'>
        <img
          src={imageSrc}
          alt='Image'
          className='object-cover w-full h-100 rounded-lg shadow-md'
        />
      </div>
  </div>

  </>
  )
}

export default Delivery