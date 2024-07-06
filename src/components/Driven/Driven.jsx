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
        <h2 className="pal mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">Driven by Technology</h2>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className="w-full md:w-1/4 p-2">
            <p className='pal'>
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
            <p className='pal'>
              Integrates with all major
              <br />
              platforms via web, API or 
              <br />
              FTP
            </p>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <FontAwesomeIcon icon={faGlobe} style={{ color: 'rgb(239, 38, 55)', fontSize: '2rem'}} className="mb-2" />
            <p  className='pal'>
              Enables all Landmark
              <br />
              Global's services worldwide
            </p>
          </div>
          <div className="">
            <FontAwesomeIcon icon={faUser} style={{ color: 'rgb(239, 38, 55)', fontSize: '2rem'}} className="mb-2" />
            <p className='pal'>Easy to navigate</p>
          </div>
        </div>
      </div>
      <div style={styles}>
    </div>
    </div>
  );
};

export default Driven;