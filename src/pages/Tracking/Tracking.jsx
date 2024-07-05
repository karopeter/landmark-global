import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import FooterTracking from '../../components/FooterTracking/FooterTracking';
import "./Tracking.css";

const Tracking = () => {
    const navigate = useNavigate();

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://trackcdn.landmarkglobal.com/resources/images/bg.svg?v=1720101015)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",  // Adjusted minHeight for responsiveness
        padding: "30px",
    };

    const [trackingNumber, setTrackingNumber] = useState('');

    const handleInputChange = (e) => {
        setTrackingNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        navigate(`/tracking/${trackingNumber}`);
        e.preventDefault();
        // Redirect to tracking details page with the tracking number
    };

    return (
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
            <div className='divCta'>
                <div className="cta ml-4 md:ml-20 bg-white p-4" style={{ maxWidth: '90vw', md: { maxWidth: '80vw' } }}>
                    <div className='cta-text-box p-20 md:w-2/3'>
                        <h2 className='heading-primary text-3xl md:text-4xl mb-4 text-blue-900'>Tracking your Shipment</h2>
                        <form
                            className="flex flex-col md:flex-row items-center gap-4 md:gap-10"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                placeholder="Search for tracking"
                                className="flex-1 p-3 border border-gray-300 rounded outline-none"
                                value={trackingNumber}
                                onChange={handleInputChange}
                            />
                            <button
                                type="submit"
                                className="p-3 bg-red-500 text-white rounded hover:bg-red-700 w-full md:w-auto"
                            >
                                See Tracking Status
                            </button>
                        </form>
                        <p className="mt-2 text-gray-700 text-lg">Enter up to 25 tracking numbers separated by commas</p>
                    </div>
                    <div className="hidden md:block md:w-1/3 bg-cover bg-center" style={{ backgroundImage: `url(${assets.backgroundImage})` }}></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-20">
    <div className="bg-white p-4 md:p-10 rounded-lg shadow-md">
        <div className="flex justify-start">
            <h1>ABOUT LANDMARK GLOBAL</h1>
        </div>
        <div className='flex justify-end'>
           <Link>VISIT OUR WEBSITE</Link>
        </div>
    </div>
    <div className="bg-white p-4 md:p-10 rounded-lg shadow-md" style={{ maxWidth: '100%' }}>
    <div className="flex justify-start">
            <h1>ABOUT LANDMARK GLOBAL</h1>
        </div>
        <div className="flex justify-end">
            <Link>LOGIN</Link>
        </div>
    </div>
</div>
            <FooterTracking />
        </div>
    );
}

export default Tracking;
