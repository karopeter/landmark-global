import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Domestic.css';

const Domestic = ({ imageSrc, method, features, add, proof, every, track, fees, locate}) => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-20">
      <div className="col-span-1 md:col-span-1">
        <h1 className="mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{method}</h1>
        <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
          We provide parcel delivery to every home within
          <br />
          the United States and Canada. Our proven
          <br />
          transportation operations and last-mile carrier
          <br />
          network enable a cost-effective, superior, and
          <br />
          faster service to your customer’s door.
        </p>
        <div className="mt-20">
          <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
            Intra-country delivery services within
            <br />
            Canada and the USA
          </p>
          <div className="bg-white mt-5 p-4 md:p-10 rounded-lg shadow-md" style={{ maxWidth: '100%' }}>
            <div>
              <div className="flex justify-start">
                <Link className="rounded sync flex items-center hover:underline">
                  <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)' }} className="mr-2" />
                  <span>Standard 2-5 days</span>
                </Link>
              </div>
              <div className="flex justify-start">
                <Link className="rounded sync flex items-center hover:underline">
                  <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)' }} className="mr-2" />
                  <span>Express 1-2 days</span>
                </Link>
              </div>
              <div className="flex justify-start">
                <Link className="rounded sync flex items-center hover:underline">
                  <FontAwesomeIcon icon={faPowerOff} style={{ color: 'rgb(239, 38, 55)' }} className="mr-2" />
                  <span>Overnight</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1">
        <img src={imageSrc} alt="Image" className="object-cover w-full h-full rounded-lg shadow-md" />
      </div>
      <div className="col-span-2 my-4">
        <hr className="border-t-2 border-gray-300 w-full" />
      </div>
     <div className=''>
     <h2 className="pal mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{features}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center">
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)' }} className="mr-2" />
      <span>{add}</span>
    </div>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center">
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)' }} className="mr-2" />
      <span>{proof}</span>
    </div>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center">
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)' }} className="mr-2" />
      <span>{every}</span>
    </div>
  </div>
</div>
 </div>
 </div>
 </> 
  );
};

export default Domestic;
