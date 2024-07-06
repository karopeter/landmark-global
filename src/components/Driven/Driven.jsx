import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faNetworkWired, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';
import "./Driven.css";

const Driven = () => {
    const styles = {
        backgroundImage: `url(${assets.follow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",  // Adjusted minHeight for responsiveness
        padding: "30px",
    };

  return (
    <div>
      <div className="p-20">
        <h2  className='mb-8 mt-5 md:mb-10 md:mt-10 text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>Driven by Technology</h2>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className="w-full md:w-1/4 p-2">
            <p className='text-lg leading-[34px] md:text-[18px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
              Our proprietary system, Mercury, brings 
              <br />
              together tracking, reporting and accounting 
              <br />
              into one easy-to-use platform giving you full 
              <br />
              visibility of your supply chain, keeping you 
              <br />
              in control.
            </p>
            <div className='mt-10'>
            <button type='button' className='btn-ghost  hover:bg-gray-700 text-white mt-4 py-2 px-4 rounded'>Get In Touch</button>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <FontAwesomeIcon icon={faNetworkWired} style={{ color: 'rgb(239, 38, 55)', fontSize: '2rem'}} className="mb-2" />
            <p  className='text-lg leading-[34px] md:text-[18px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
              Integrates with all major
              <br />
              platforms via web, API or 
              <br />
              FTP
            </p>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <FontAwesomeIcon icon={faGlobe} style={{ color: 'rgb(239, 38, 55)', fontSize: '2rem'}} className="mb-2" />
            <p   className='text-lg leading-[34px] md:text-[18px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
              Enables all Landmark
              <br />
              Global's services worldwide
            </p>
          </div>
          <div className="">
            <FontAwesomeIcon icon={faUser} style={{ color: 'rgb(239, 38, 55)', fontSize: '2rem'}} className="mb-2" />
            <p  className='text-lg leading-[34px] md:text-[18px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>Easy to navigate</p>
          </div>
        </div>
      </div>
      <div style={styles}>
    </div>
    </div>
  );
};

export default Driven;