import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import "./Touch.css";

const Touch = ({ method }) => {
  return (
    <div className="p-4 md:p-10 lg:p-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-1 mt-4 md:mt-10">
        <h2 className=' text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>
          {method}
        </h2>
          <p className="text-[#2E5D74] text[18px] text-base md:text-lg leading-relaxed mt-4 text-center md:text-left">
            Everything we do is built around our clients’ 
            <br />
            needs. Our aim is to provide an unparalleled 
            <br />
            customer experience. We continually 
            <br />
            monitor our performance and refine our 
            <br />
            solutions to ensure we deliver for you on 
            <br />
            time, every time.
          </p>
        </div>
        <div className="col-span-1 mt-4 md:mt-10">
          <div className="flex justify-center md:justify-start mb-4">
            <FontAwesomeIcon icon={faUsers} style={{ color: 'rgb(239, 38, 55)', fontSize: '2rem' }} />
          </div>
          <h2 className='text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>Specialized onboarding team</h2>
          <p className="text-[#2E5D74] text-[18px] text-base md:text-lg leading-relaxed mt-4 text-center md:text-left">
            A team of multi-disciplinary experts making 
            <br />
            the integration process as smooth as possible 
            <br />
            and always ready to go the extra mile
          </p>
        </div>
        <div className="col-span-1 mt-4 md:mt-10">
          <div className="flex justify-center md:justify-start mb-4">
            <FontAwesomeIcon icon={faHandshake} style={{ color: 'rgb(239, 38, 55)', fontSize: '2rem' }} />
          </div>
          <h2 className='text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>Dedicated customer support</h2>
          <p className="text-[#2E5D74] text-[18px] text-base md:text-lg leading-relaxed mt-4 text-center md:text-left">
            Our client support team works closely with
            <br />
            you to answer all your questions and
            <br />
            understand your specific shipping needs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Touch;