import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';
import "./JetLag.css";
import { Link } from 'react-router-dom';

const JetLag = ({imageSrc, method, leading, features, dropoff, end, options, intelligence, expert, duty, services}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const countries = [
        'Canada',
        'Mexico',
        'UK',
        'Europe',
        'Brazil',
        'Australia',
        'New Zealand'
      ];
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-20">
    <div className="col-span-1 md:col-span-1">
    <h1 className="pal mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{method}</h1>
      <p className="lee text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      Using both air and ground transportations options, we connect you seamlessly to our worldwide delivery network of 220 destinations while maintaining a constant focus on improving our services to the top ecommerce destinations around the world.
      </p>
      <p className="lee text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
      Powered by our proprietary technology, Mercury, we dynamically route parcels into our highly intelligent final mile network giving you full visibility of your packages along the way.
      </p>
    </div>
    <div className="col-span-1 md:col-span-1">
      <img src={imageSrc} alt="Image" className="object-cover w-full h-full rounded-lg shadow-md" />
    </div>
  </div>
  <div className="ml-20">
     <h2 className="pal mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{leading}</h2>
     <p className="lee text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
     In Canada, our largest in-house network, your packages will be within Landmark's control throughout 
     <br />
     the entire delivery experience. We transport goods across the border on Landmark owned trucks into 
     <br />
     our own Canadian facilities, located close to your customers. This enables our local couriers to make 
     <br />
     the final delivery and facilitate returns as needed.
     </p>
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
        <p className="exp inline-block">{intelligence}</p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">{expert}</p>
       </div>
       <div className="bg-white m-2 flex-1">
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(239, 38, 55)'}} className="mr-2" />
        <p className="exp inline-block">{duty}</p>
       </div>
    </div>
</div>
<div className="ml-20">
  <h2 className="pal mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{services}</h2>
  <div className="mt-4 back rounded overflow-auto">
    <div className="flex flex-col md:flex-row md:justify-start gap-20">
        <div>
            <img src={assets.logo} alt="" className="h-12 md:h-16" />    
        </div>
        <div className="mt-8">
            <p className="lee">STANDARD DDP</p>
        </div>
        <div className="mt-8">
            <p className="lee">STANDARD DDU</p>
        </div>
    </div>
    <table className="min-w-full bg-white mt-5">
      <thead>
      </thead>
      <tbody>
        <tr className="mt-5">
          <td className="osm py-2 px-10 border-b">Transit time</td>
          <td className="osm py-2 px-10  border-b">1-9 days</td>
          <td className="osm py-2   border-b">5-14 days</td>
        </tr>
        <tr className="bg-white">
          <td className="osm py-2 px-10 border-b">Visibility</td>
          <td className="osm py-2 px-10 border-b">Fully trackable to final delivery</td>
          <td className="osm py-2 border-b">Trackable in destination country</td>
        </tr>
        <tr>
          <td className="osm py-2 px-10 border-b">Clearance type</td>
          <td className="osm py-2 px-10 border-b">Commercial/casual</td>
          <td className="osm py-2  border-b ">Commercial/casual</td>
        </tr>
        <tr className="bg-white">
          <td className="osm py-2 px-10 border-b ">D&T paid by</td>
          <td className="osm py-2 px-10 border-b ">Shipper/customer at checkout</td>
          <td className="osm py-2  border-b">Consumer upon arrival in country</td>
        </tr>
        <tr className="bg-white">
          <td className="osm py-2 px-10 border-b">Countries serviced</td>
          <td className="osm py-2 px-10 border-b  relative">
      <Link onClick={toggleDropdown} className="cursor-pointer p-2 rounded flex items-center">
        Top ecommerce destinations
        <FontAwesomeIcon
                icon={isDropdownOpen ? faChevronUp : faChevronDown}
                className='ml-2'
              />
      </Link>
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-md z-10">
          <ul className="py-2">
            {countries.map((country, index) => (
              <li key={index} className="px-10 py-2 hover:bg-gray-200">
                {country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </td>
          <td className="osm  px-4 border-b text-left">220 countries</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

 </>
  )
}

export default JetLag