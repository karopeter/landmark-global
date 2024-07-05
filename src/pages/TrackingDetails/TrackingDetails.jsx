import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FooterTracking from '../../components/FooterTracking/FooterTracking';
import "./TrackingDetails.css";

const TrackingDetails = () => {
    const { trackingNumber } = useParams();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const fetchTrackingDetails = (trackingNumber) => {
        const trackingDetails = {
            trackingNumber: trackingNumber,
            status: 'In Transit',
            completed: 'Complete',
            location: 'Dunmore, PA, US',
            estimatedDelivery: 'Fri, Nov 25, 6:59 AM PST',
            returned: 'Return received',
            york: 'Cheektowaga, NY',
            updated: 'Updated: Wed, Apr 12, 12:52 PM PDT',
            shippedLocation: 'Cheektowaga, NY',
            shippedDate: 'Wed, Apr 12, 12:52 PM PDT',
            facility: 'handling facility'
        };
        return trackingDetails;
    };

    const trackingDetails = fetchTrackingDetails(trackingNumber);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://trackcdn.landmarkglobal.com/resources/images/bg.svg?v=1720101015)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "30px",
    };

    return (
        <>
        <div style={styles}>
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={assets.mecuryLogo} alt="Logo" className="h-10 mr-4" />
                    </Link>
                </div>
                <div className="flex items-center justify-end flex-1">
                    <Link to="">
                        <span className="text-white text-xl">Mercury</span>
                    </Link>
                </div>
            </div>
            <div>
                <h2 className="ml-4 md:ml-20 mt-10 link">40959R · LTN45454544</h2>
            </div>
            <div className="ml-4 md:ml-20 bg-white p-4" style={{ maxWidth: '90vw', md: { maxWidth: '80vw' } }}>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="p-4 m-2 rounded">
                        <h2>{trackingDetails.completed}</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-end">
                        <div className="p-4 m-2 rounded">
                            <h3>DELIVERY PARTNER</h3>
                            <p className='osm'>OSM</p>
                        </div>
                        <div className="p-4 m-2 rounded">
                            <h3>SHIPPING TO</h3>
                            <p className='osm'>{trackingDetails.location}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start ml-5'>
                    <h3 className='ree'>{trackingDetails.returned}</h3>
                </div>
                <div className='flex justify-start ml-5'>
                    <p className='ree'>{trackingDetails.york}</p>
                </div>
                <div className='flex justify-start ml-5'>
                    <p className='ree'>{trackingDetails.updated}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col md:flex-row justify-start">
                        <div className="p-4 m-2 rounded">
                            <strong>Date Received</strong>
                            <p className='ree'>{trackingDetails.estimatedDelivery}</p>
                        </div>
                        <div className="p-4 m-2 rounded">
                            <strong>Shipped</strong>
                            <p className='ree'>{trackingDetails.shippedLocation}</p>
                            <p className='ree'>{trackingDetails.shippedDate}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="p-4 m-2 rounded">
                            <strong>Completed -</strong> <span className='ree'>Received at return</span>
                            <p className='ree'>{trackingDetails.facility}</p>
                            <p className='ree'>{trackingDetails.shippedLocation}</p>
                            <p className='ree'>{trackingDetails.shippedDate}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <Link
                        className="ree p-2 rounded flex items-center hover:underline"
                        onClick={handleDropdownToggle}
                        to="#"
                    >
                        Full Event History
                        <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="ml-2" />
                    </Link>
                </div>
                {isDropdownOpen && (
                    <div className="mt-4 bg-white rounded shadow-md overflow-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="osm py-2 px-4 border-b text-left">DESCRIPTION</th>
                                    <th className="osm py-2 px-4 border-b text-left">DATE / TIME</th>
                                    <th className="osm  px-4 border-b text-left">LOCATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-gray-200'>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.returned}</td>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.shippedDate}</td>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.shippedLocation}</td>
                                </tr>
                                <tr>
                                    <td className="osm py-2 px-4 border-b text-left">Grouped at Landmark facility</td>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.shippedDate}</td>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.shippedLocation}</td>
                                </tr>
                                <tr className='bg-gray-200'>
                                    <td className="osm py-2 px-4 border-b text-left">Received at return handling facility</td>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.estimatedDelivery}</td>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.shippedLocation}</td>
                                </tr>
                                <tr>
                                    <td className="osm py-2 px-4 border-b text-left">Shipment Data Uploaded</td>
                                    <td className="osm py-2 px-4 border-b text-left">{trackingDetails.estimatedDelivery}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-20">
    <div className="bg-white p-4 md:p-10 rounded-lg shadow-md">
        <h3 className="mb-4">Shipment Details</h3>
        <p className="mb-4 ree">ORDER REFERENCE</p>
        <p className="mb-4 ree">40959R</p>
        <div className="mt-4">
            <p className="mb-4 ree">PACKAGE REFERENCE</p>
            <p className="ree">N/A</p>
        </div>
    </div>
    <div className="bg-white p-4 md:p-10 rounded-lg shadow-md" style={{ maxWidth: '100%' }}>
        <h3 className="mb-4">Delivery Details</h3>
        <p className="mb-4 ree">DELIVERY PARTNER</p>
        <p className="mb-4 ree">OSM 1002258361210001422700810803769852</p>
        <div className="mt-4">
            <p className="mb-4 ree">LANDMARK TRACKING NUMBER</p>
            <p className='ree'>LTN45454544</p>
        </div>
    </div>
</div>
 <FooterTracking />
</div>
    </>
    );
};

export default TrackingDetails;
