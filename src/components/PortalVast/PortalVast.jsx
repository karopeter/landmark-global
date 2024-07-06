import React from 'react'
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./PortalVast.css";
import LogServices from '../LogServices/LogServices';
import Growth from '../Growth/Growth';

const PortalVast = ({features, dropoff, end, options, intelligence, expert, duty, product, draw, content}) => {
    const right = {
        display: 'grid',
        paddingLeft: '1rem',
        gridTemplateRows: '1fr 3fr',
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
        backgroundImage: `url(${assets.loggy})`,
        backgroundRepeat: 'no-repeat'
    }
  return (
    <div>
       <div className='webpage'>
         <div className='left-view'>
            <div>
                <h1  className='text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#fff]'>Return Services</h1>
                <p className='text-lg leading-[34px] md:text-[20px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#fff]'>
                Seamless in-country solutions that are easy
                
                to implement and cost-effective. We leverage our 
                
                online returns portal in Mercury with our vast 
                
                worldwide postal network to get returns back to you safely, handling everything from the labeling 
                
                to inbound clearance and transportation back to 
                
                your facility.  
                </p>
            </div>
         </div>
         <div style={right}></div>
       </div>

       <div className='p-20'>
    <h2 className='mb-8 mt-5 md:mb-10 md:mt-10 text-[20px] text-start font-bold lg:text-2xl md:text-left text-[#2E5D74]'>{features}</h2>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className='text-lg leading-[34px] md:text-[20px] font-normal text-start lg:leading-relaxed  md:text-left text-[#2E5D74] inline-block'>{dropoff}</p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">{end}</p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">{options}</p>
       </div>
    </div>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">
         {intelligence}
        </p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">
          {expert}
        </p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">{duty}</p>
       </div>
    </div>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">
         {product}
        </p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">
          {draw}
        </p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">{content}</p>
       </div>
    </div>
 </div>
   <section className=' bg-[#174359] pb-16 pt-10 lg:pt-16 lg:pb-28'>
    <div className=''>
      <LogServices />
    </div>
   </section>
   <Growth />
</div>
  )
}

export default PortalVast