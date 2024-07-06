import React from 'react'
import "./Delivery.css";

const Delivery = ({imageSrc, method, features}) => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-20">
    <div className="col-span-1 md:col-span-1">
    <h1 className="mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{method}</h1>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      Landmark Global has built an extensive network of international couriers around the world that provides a pleasant delivery experience for your customers. Whether shipping within the USA or Canada, or to countries outside of North America - we have you covered.
      </p>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      We are the market leader into Canada, the USA’s most important cross-border market, and we are the #1 customer of the Canadian Border Services Agency.
      </p>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      Your packages will travel from Landmark facilities to Canada on Landmark trucks over the border where our in-house brokerage team clears your items, maintaining control of your shipments throughout the entire clearance process. Once in Canada, our team tenders packages to Landmark facilities located close to your customers, enabling our local couriers make the final delivery.
      </p>
    </div>
    <div className="col-span-1 md:col-span-1">
      <img src={imageSrc} alt="Image" className="object-cover w-full h-full rounded-lg shadow-md" />
    </div>
  </div>
  
  </>
  )
}

export default Delivery
