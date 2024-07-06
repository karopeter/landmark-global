import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import "./TradeInclude.css";

const TradeInclude = ({imageSrc, method, features, consumer, product, duty, clearance, tax, health, compass, refund}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-20">
    <div className="col-span-1 mt-10 md:col-span-1">
    <h2 className='mb-8 mt-5 md:mb-10 md:mt-10 text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>
          {method}
        </h2>
     <p className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
      We think you’ll find our approach to global trade compliance 
      <br />
      refreshingly different. Traditional customs brokers tend to hi 
      <br />
      light the daunting complexity of international trade and are 
      <br />
      </p>
      <p className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
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

    <div className='p-20 md:p-20'>
    <h2 className="mb-8 mt-5 md:mb-10 md:mt-10 text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'">{features}</h2>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="flex-1">
        <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
        <span className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{consumer}</span>
        <div className="shadow-md mt-4 bg-white p-4" style={{ height: '40vh', width: '100%', }}>
            <em className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
               We’re the leading specialists in E-commerce clearances and have been powering the success of global iconic brands for over 15 years.  
            </em>
        </div>
       </div>
       <div className="flex-1">
         <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
         <span className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{product}</span>
         <div className="shadow-md mt-4 bg-white m-2 p-4" style={{ height: '40vh', width: '100%' }}>
            <em className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
            Our in-house experts around the world give us the advantage of understanding both global and local product requirements so we can develop the right solutions for you, enabling you to expand with confidence.
            </em>
         </div>
       </div>
       <div className="flex-1">
       <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
       <span className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{duty}</span>
       <div className="shadow-md mt-4 bg-white m-5 p-4" style={{ height: '40vh', width: '100%' }}>
         <em className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
         The proper solution can provide huge advantages to cash flow. Our Bonded Warehouse and Free Trade Zone solutions keep more capital in your wallet.
         </em>
      </div>
       </div>
    </div>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="flex-1">
        <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
        <span className='text-lg leading-[24px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{consumer}</span>
        <div className="shadow-md mt-4 bg-white p-4" style={{ height: '40vh', width: '100%', }}>
            <em className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
               We’re the leading specialists in E-commerce clearances and have been powering the success of global iconic brands for over 15 years.  
            </em>
        </div>
       </div>
       <div className="flex-1">
         <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
         <span className='text-lg leading-[24px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{product}</span>
         <div className="shadow-md mt-4 bg-white m-2 p-4" style={{ height: '40vh', width: '100%' }}>
            <em className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
            Our in-house experts around the world give us the advantage of understanding both global and local product requirements so we can develop the right solutions for you, enabling you to expand with confidence.
            </em>
         </div>
       </div>
       <div className="flex-1">
       <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
       <span className='text-lg leading-[24px] text-[24px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{duty}</span>
       <div className="shadow-md mt-4 bg-white m-5 p-4" style={{ height: '40vh', width: '100%' }}>
         <em className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
         The proper solution can provide huge advantages to cash flow. Our Bonded Warehouse and Free Trade Zone solutions keep more capital in your wallet.
         </em>
      </div>
       </div>
    </div>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="flex-1">
        <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
        <span className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{consumer}</span>
        <div className="shadow-md mt-4 bg-white p-4" style={{ height: '40vh', width: '100%', }}>
            <em  className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
               We’re the leading specialists in E-commerce clearances and have been powering the success of global iconic brands for over 15 years.  
            </em>
        </div>
       </div>
       <div className="flex-1">
         <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
         <span className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{product}</span>
         <div className="shadow-md mt-4 bg-white m-2 p-4" style={{ height: '40vh', width: '100%' }}>
            <em  className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
            Our in-house experts around the world give us the advantage of understanding both global and local product requirements so we can develop the right solutions for you, enabling you to expand with confidence.
            </em>
         </div>
       </div>
       <div className="flex-1">
       <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)', fontSize: '1.5rem' }} className="mr-2" />
       <span className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>{duty}</span>
       <div className="shadow-md mt-4 bg-white m-5 p-4" style={{ height: '40vh', width: '100%' }}>
         <em className='text-lg leading-[34px] text=[16px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
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
