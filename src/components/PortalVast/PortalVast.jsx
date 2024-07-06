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
                <h1 className="stats">Return Services</h1>
                <p className='seam'>
                Seamless in-country solutions that are easy
                 <br /> 
                to implement and cost-effective. We leverage our 
                <br />
                online returns portal in Mercury with our vast 
                <br />
                worldwide postal network to get returns back to you safely, handling everything from the labeling 
                <br />
                to inbound clearance and transportation back to 
                <br />
                your facility.  
                </p>
            </div>
         </div>
         <div style={right}></div>
       </div>

       <div className='p-20'>
    <h2 className="pal mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{features}</h2>
    <div className='flex flex-col md:flex-row md:justify-between'>
    <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">{dropoff}</p>
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
   <section className='sect-fil'>
   <h2 className="text-center mt-8 text-white heading">Fulfillment Solutions</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
  <div className="col-span-1 md:col-span-1">
    <Link to="/fulfilment-solutions">
      <LogServices title="Fulfilment Solutions" buttonText="Learn More" />
    </Link>
  </div>
  <div className="col-span-1 md:col-span-1">
    <Link to="/trade-services">
      <LogServices title="Trade Services" buttonText="Learn More" />
    </Link>
  </div>
</div>

   </section>
   <Growth />
</div>
  )
}

export default PortalVast