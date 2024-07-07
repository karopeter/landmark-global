import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import FooterTracking from '../../components/FooterTracking/FooterTracking';
import './Tracking.css';
import { useEffect, useState } from 'react';
import { db } from '../../App';
import { collection, getDocs } from 'firebase/firestore';
import { TextInput, Progress } from 'flowbite-react';

const Tracking = () => {
  const [trackingDetails, setTrackingDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const styles = {
    backgroundImage: ` url(https://trackcdn.landmarkglobal.com/resources/images/bg.svg?v=1720101015)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const [trackingNumber, setTrackingNumber] = useState('');
  console.log(trackingNumber);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const shippingLogCollection = collection(db, 'shipping_log');
        const shippingLogSnapshot = await getDocs(shippingLogCollection);
        const shippingLogList = shippingLogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const foundTracking = shippingLogList.find(
          (log) => log.tracking_id === trackingNumber
        );
        if (foundTracking) {
          setTrackingDetails(foundTracking);
        } else {
          setError('Tracking information not found');
        }
      } catch (error) {
        setError(error.message || 'Error fetching tracking details');
        console.error('Error fetching shipping logs: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [trackingNumber]);

  const handleInputChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(true);
    if (trackingDetails) {
      navigate(`/tracking/${trackingNumber}`);
    } else {
      setError('Tracking information not found');
    }

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
              className='flex flex-col justify-center items-center gap-9 md:flex-row   '
              onSubmit={handleSubmit}
            >
              <div className='w-full relative'>
                <TextInput
                  placeholder='Search for tracking'
                  value={trackingNumber}
                  onChange={handleInputChange}
                  id='md'
                  type='text'
                  sizing='lg'
                />
                {showError && error && (
                  <p className='text-red-500 absolute mb-11'>{error}</p>
                )}
              </div>
              <div className='md:w-2/5 w-full flex items-center gap-4'>
                <button
                  type='submit'
                  className='p-3 bg-red-500 text-white rounded hover:bg-red-700 w-full text-2xl '
                >
                  See Tracking Status
                </button>
                {isLoading && <Progress size='sm' />}
              </div>
            </form>
            <p className='mt-6 text-gray-700 text-lg'>
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
