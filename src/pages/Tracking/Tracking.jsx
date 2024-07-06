import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import FooterTracking from '../../components/FooterTracking/FooterTracking';
import './Tracking.css';
import { useState } from 'react';

const Tracking = () => {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: ` url(https://trackcdn.landmarkglobal.com/resources/images/bg.svg?v=1720101015)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={styles} className='bg-[#1d3345] md:h-[100vh]  h-full'>
      <div className='flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <Link to='/'>
            <img src={assets.mecuryLogo} alt='Logo' className='h-10 mr-4' />
          </Link>
        </div>
        <div className='flex items-center justify-end flex-1'>
          <Link to=''>
            <span className='text-white text-xl'>Mercury</span>
          </Link>
        </div>
      </div>
      <div className='w-[90%] md:w-[75%] mx-auto my-auto  md:mt-[120px]'>
        <div className='cta  bg-white p-[40px] '>
          <div className='cta-text-box   '>
            <h2 className='heading-primary text-[34px] md:text-4xl mb-4 text-[#2B353D]'>
              Tracking your Shipment
            </h2>
            <form
              className='flex flex-col items-center gap-9 md:flex-row   '
              onSubmit={handleSubmit}
            >
              <div className='w-full relativex'>
                <input
                  type='text'
                  placeholder='Search for tracking'
                  className='p-3 border border-gray-300 rounded outline-none w-full '
                  value={trackingNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className='md:w-2/5 w-full'>
                <button
                  type='submit'
                  className='p-3 bg-red-500 text-white rounded hover:bg-red-700 w-full text-2xl '
                >
                  See Tracking Status
                </button>
              </div>
            </form>
            <p className='mt-2 text-gray-700 text-lg'>
              Enter up to 25 tracking numbers separated by commas
            </p>
          </div>
          <div
            className='hidden md:block md:w-1/3 bg-cover bg-center'
            style={{ backgroundImage: `url(${assets.backgroundImage})` }}
          ></div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10  w-[90%] md:w-[75%] mx-auto my-auto'>
        <div className='bg-white p-4 md:p-10 rounded-lg shadow-md w-[100%]'>
          <div className='md:flex justify-start hidden'>
            <h1>ABOUT LANDMARK GLOBAL</h1>
          </div>
          <div className='flex justify-center md:justify-end'>
            <Link
              to='/'
              className='p-2 text-xl rounded flex items-center hover:underline text-red-500 hover:text-red-500'
              onClick={handleDropdownToggle}
            >
              VISIT OUR WEBSITE
              <FontAwesomeIcon
                icon={isDropdownOpen ? faChevronLeft : faChevronRight}
                className='ml-2'
              />
            </Link>
          </div>
        </div>
        <div className='bg-white p-4 md:p-10 rounded-lg shadow-md w-[100%]'>
          <div className='md:flex justify-start hidden'>
            <h1>ABOUT LANDMARK GLOBAL</h1>
          </div>
          <div className='flex justify-center md:justify-end'>
            <Link
              className='p-2 rounded text-xl flex items-center hover:underline text-red-500 hover:text-red-500'
              onClick={handleDropdownToggle}
            >
              LOGIN
              <FontAwesomeIcon
                icon={isDropdownOpen ? faChevronLeft : faChevronRight}
                className='ml-2'
              />
            </Link>
          </div>
        </div>
      </div>
      <FooterTracking />
    </div>
  );
};

export default Tracking;
