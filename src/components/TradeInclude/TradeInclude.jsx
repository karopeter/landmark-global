import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import "./TradeInclude.css";

const TradeInclude = ({imageSrc, method, features, consumer, product, duty}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-20">
    <div className="col-span-1 mt-10 md:col-span-1">
    <h1 className="mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{method}</h1>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      We think you’ll find our approach to global trade compliance 
      <br />
      refreshingly different. Traditional customs brokers tend to hi 
      <br />
      light the daunting complexity of international trade and are 
      <br />
      still giving you the same solutions offered decades ago.
      </p>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      At Landmark Global, we've been busy pioneering modern 
      <br />
      trade solutions, enabling thousands of iconic brands to 
      <br />
      expand seamlessly into new territories and reach new 
      <br />
      customers.
      </p>
      <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
       By connecting our proprietary clearance platform with our 
       <br />
       internal team of dedicated trade experts, we help make global 
       <br />
       expansion feel effortless for businesses of all sizes.
      </p>
    </div>
    <div className="col-span-1 md:col-span-1">
      <img src={imageSrc} alt="Image" className="object-cover w-full h-full rounded-lg shadow-md" />
    </div>
  </div>
    
  <div className="col-span-2 my-4">
        <hr className="border-t-2 border-gray-300 w-full" />
      </div>

      <div className='p-20'>
    <h2 className="pal mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{features}</h2>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="flex-1">
        <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
        <span>{consumer}</span>
        <div className="shadow-md mt-4 bg-white p-4" style={{ height: '40vh', width: '100%', }}>
            <em className="emi">
               We’re the leading specialists in E-commerce clearances and have been powering the success of global iconic brands for over 15 years.  
            </em>
        </div>
       </div>
       <div className="flex-1">
         <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
         <span>{product}</span>
         <div className="shadow-md mt-4 bg-white m-2 p-4" style={{ height: '40vh', width: '100%' }}>
            <em className="emi">
            Our in-house experts around the world give us the advantage of understanding both global and local product requirements so we can develop the right solutions for you, enabling you to expand with confidence.
            </em>
         </div>
       </div>
       <div className="flex-1">
       <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
       <span>{duty}</span>
       <div className="shadow-md mt-4 bg-white m-5 p-4" style={{ height: '40vh', width: '100%' }}>
         <em className="emi">
         The proper solution can provide huge advantages to cash flow. Our Bonded Warehouse and Free Trade Zone solutions keep more capital in your wallet.
         </em>
      </div>
       </div>
    </div>
</div>
    </div>
  )
}

export default TradeInclude
