import React from 'react'
import "./Leading.css";

const Leading = ({ title1, title2, title3, description1, description2, description3,  imageSrc, method, learn}) => {
  return (
   <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2   ">
      <div className="col-span-1 flex flex-col items-center justify-center text-center">
      <h1 className="calls font-bold mb-4">{title1}</h1>
        <p className="fire-text">{description1}</p>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center text-center">
      <h1 className="calls font-bold mb-4">{title2}</h1>
        <p className="fire-text">{description2}</p>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center text-center">
      <h1 className="calls font-bold mb-4">{title3}</h1>
        <p className="fire-text">{description3}</p>
      </div>
    </div>
</>
  )
}

export default Leading
