import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FooterTracking from '../../components/FooterTracking/FooterTracking';
import './TrackingDetails.css';
import MobileTimeLine from '../../components/MobileTimeline/MobileTimeLine';
import { Timeline } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';

import { db } from '../../App';
import { collection, getDocs } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

const TrackingDetails = () => {
  const [trackingDetailsnow, setTrackingDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { trackingNumber: trackingNumberParam } = useParams();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const theme = {
    root: {
      direction: {
        horizontal: 'sm:flex',
        vertical: 'relative border-l border-gray-200 dark:border-gray-700',
      },
    },
    item: {
      root: {
        horizontal: 'relative mb-6 sm:mb-0',
        vertical: 'mb-10 ml-6',
      },
      content: {
        root: {
          base: '',
          horizontal: 'mt-3 sm:pr-8',
          vertical: '',
        },
        body: {
          base: 'mb-4 text-base font-normal text-gray-500 dark:text-gray-400',
        },
        time: {
          base: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
        },
        title: {
          base: 'text-lg font-semibold text-gray-900 dark:text-white',
        },
      },
      point: {
        horizontal: 'flex items-center',
        line: 'hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex',
        marker: {
          base: {
            horizontal:
              'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
            vertical:
              'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
          },
          icon: {
            base: 'h-3 w-3 text-white dark:text-cyan-300',
            wrapper:
              'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2d4559] ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900',
          },
        },
        vertical: '',
      },
    },
  };

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
          (log) => log.tracking_id === trackingNumberParam
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
  }, [trackingNumberParam]);

  console.log(trackingDetailsnow);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    if (trackingDetailsnow) {
      setIsLoading(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const timelineEvents = [
    {
      status: 'Data Received',
      location: 'San Bernardino, CA',
      date: 'Fri, Sep 27, 8:26 PM GMT+1',
      completed: true,
    },
    {
      status: 'In Transit',
      location: 'Los Angeles, CA',
      date: 'Sat, Sep 28, 10:15 AM GMT+1',
      completed: true,
    },
    {
      status: 'Out for Delivery',
      location: 'New York, NY',
      date: 'Mon, Sep 30, 9:00 AM GMT+1',
      completed: true,
    },
    {
      status: 'Delivered',
      location: 'New York, NY',
      date: 'Mon, Sep 30, 2:30 PM GMT+1',
      completed: true,
    },
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const formatTimestamp = (timestamp) => {
    if (timestamp instanceof Timestamp) {
      const date = timestamp.toDate();
      return date.toLocaleString(); // or use any other date formatting method
    }
    return 'Invalid Date';
  };

  const styles = {
    backgroundImage: ` url(https://trackcdn.landmarkglobal.com/resources/images/bg.svg?v=1720101015)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // minHeight: '100vh',
    padding: '0px',
  };

  const TimelineSkeleton = () => (
    <div className='animate-pulse flex justify-between w-full'>
      {[...Array(4)].map((_, index) => (
        <div key={index} className='flex flex-col items-center'>
          <div className='w-8 h-8 bg-gray-300 rounded-full mb-2'></div>
          <div className='h-4 bg-gray-300 rounded w-20 mb-2'></div>
          <div className='h-3 bg-gray-300 rounded w-16'></div>
          <div className='h-3 bg-gray-300 rounded w-16'></div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isLoading ? (
        <div className=' justify-center flex items-center h-screen px-32'>
          {' '}
          <TimelineSkeleton />
        </div>
      ) : (
        trackingDetailsnow && (
          <div style={styles} className='bg-[#1d3345]'>
            <div className='flex md:justify-between md:items-center p-4'>
              <div className='flex items-center'>
                <Link to='/'>
                  <img
                    src={assets.mecuryLogo}
                    alt='Logo'
                    className='h-10 mr-4'
                  />
                </Link>
              </div>
              <div className='flex items-center justify-end flex-1'>
                <Link to=''>
                  <span className='text-white text-xl'>Mercury</span>
                </Link>
              </div>
            </div>
            <div className=' pl-4 md:pl-44  mb-2 flex justify-start mx-auto'>
              <h2 className=' link'>40959R · LTN454{trackingNumberParam}</h2>
            </div>
            <div className='bg-white p-[24px] md:p-[32px] h-auto md:w-4/5 w-11/12 justify-center mx-auto rounded-md   flex flex-col'>
              <div className='flex flex-row justify-center items-center md:flex-row  md:justify-between '>
                <div className='px-4  text-[32px] text-[#2B353D] rounded hidden md:flex'>
                  <h2>{trackingDetailsnow.status}</h2>
                </div>
                <div className='flex flex-row gap-10 justify-center items-center md:flex-row md:justify-end'>
                  <div className='gap-y-3 flex flex-col'>
                    <h3>DELIVERY PARTNER</h3>
                    <p className='osm'>
                      {' '}
                      <Link className='text-[#005f85] underline flex  items-center gap-1'>
                        Canada Post{' '}
                        <span className=' text-[#005f85] '>
                          {' '}
                          <svg
                            viewBox='0 0 16 17'
                            className='w-5 h-5'
                            fill='#005f85'
                          >
                            <path d='M4.2914 2.94H7.74433C7.8824 2.94 7.99433 3.05193 7.99433 3.19V3.84729C7.99433 3.98536 7.8824 4.09729 7.74433 4.09729H4.2914C3.90795 4.09729 3.59711 4.40817 3.59711 4.79167V12.1983C3.59711 12.5818 3.90795 12.8927 4.2914 12.8927H11.6973C12.0807 12.8927 12.3916 12.5818 12.3916 12.1983V8.745C12.3916 8.60693 12.5035 8.495 12.6416 8.495H13.2987C13.4368 8.495 13.5487 8.60693 13.5487 8.745V12.1983C13.5487 13.221 12.7198 14.05 11.6973 14.05H4.2914C3.26887 14.05 2.43994 13.221 2.43994 12.1983V4.79167C2.43994 3.76902 3.26887 2.94 4.2914 2.94ZM9.8724 2.94123C9.73433 2.94123 9.6224 3.05315 9.6224 3.19123V3.86962C9.6224 4.00769 9.73433 4.11962 9.8724 4.11962H11.5534L7.75354 7.91993C7.65593 8.01756 7.65593 8.17584 7.75354 8.27347L8.21825 8.73822C8.31588 8.83587 8.47419 8.83587 8.57182 8.73822L12.3717 4.93795V6.6192C12.3717 6.75727 12.4836 6.8692 12.6217 6.8692H13.2999C13.438 6.8692 13.5499 6.75727 13.5499 6.6192V3.19123C13.5499 3.05315 13.438 2.94123 13.2999 2.94123L9.8724 2.94123Z'></path>
                            <path d='M4.2914 2.94H7.74433C7.8824 2.94 7.99433 3.05193 7.99433 3.19V3.84729C7.99433 3.98536 7.8824 4.09729 7.74433 4.09729H4.2914C3.90795 4.09729 3.59711 4.40817 3.59711 4.79167V12.1983C3.59711 12.5818 3.90795 12.8927 4.2914 12.8927H11.6973C12.0807 12.8927 12.3916 12.5818 12.3916 12.1983V8.745C12.3916 8.60693 12.5035 8.495 12.6416 8.495H13.2987C13.4368 8.495 13.5487 8.60693 13.5487 8.745V12.1983C13.5487 13.221 12.7198 14.05 11.6973 14.05H4.2914C3.26887 14.05 2.43994 13.221 2.43994 12.1983V4.79167C2.43994 3.76902 3.26887 2.94 4.2914 2.94ZM9.8724 2.94123C9.73433 2.94123 9.6224 3.05315 9.6224 3.19123V3.86962C9.6224 4.00769 9.73433 4.11962 9.8724 4.11962H11.5534L7.75354 7.91993C7.65593 8.01756 7.65593 8.17584 7.75354 8.27347L8.21825 8.73822C8.31588 8.83587 8.47419 8.83587 8.57182 8.73822L12.3717 4.93795V6.6192C12.3717 6.75727 12.4836 6.8692 12.6217 6.8692H13.2999C13.438 6.8692 13.5499 6.75727 13.5499 6.6192V3.19123C13.5499 3.05315 13.438 2.94123 13.2999 2.94123L9.8724 2.94123Z'></path>
                          </svg>
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className='gap-y-2 flex flex-col '>
                    <h3>SHIPPING TO</h3>
                    <p className='osm'>{trackingDetailsnow.location}</p>
                  </div>
                </div>
              </div>
              <div className=' flex flex-col gap-y-2 mb-5'>
                <div className='md:flex justify-start ml-5 hidden '>
                  <h3 className='text-[22.4px] text-[#6C757D] font-medium  uppercase'>
                    {trackingDetailsnow.statusdescription}
                  </h3>
                </div>
                <div className='hidden md:flex  justify-start ml-5'>
                  <p className='text-[16px] text-[#6C757D]'>
                    {trackingDetailsnow.shippedLocation}
                  </p>
                </div>
                <div className='hidden md:flex justify-start ml-5'>
                  <p className='text-[16px] text-[#6C757D]'>
                    Updated,
                    {formatTimestamp(trackingDetailsnow.shipped_date)}
                  </p>
                </div>
              </div>
              <div className=' md:flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col md:hidden gap-y-2 justify-start mt-6  '>
                  <p className='text-[32px] font-medium text-[#2B353D]'>
                    {trackingDetailsnow.status}
                  </p>
                  <span className=' text-[22px] text-[#6C757D] font-medium uppercase'>
                    {trackingDetailsnow.statusdescription}
                  </span>

                  <p className='text-[#6C757D] text-[16px]'>
                    {trackingDetailsnow.shippedLocation}
                  </p>
                  <p className='text-[#6C757D] text-[16px]'>
                    {' '}
                    Updated,
                    {formatTimestamp(trackingDetailsnow.shipped_date)}
                  </p>
                </div>
              </div>
              {isMobile ? (
                <MobileTimeLine data={timelineEvents} />
              ) : (
                <Timeline horizontal className='pl-8' theme={theme}>
                  {timelineEvents.map((event, index) => (
                    <Timeline.Item key={index}>
                      <Timeline.Point icon={HiCheck} />
                      <Timeline.Content>
                        <Timeline.Title>{event.status}</Timeline.Title>
                        <Timeline.Body>{event.location}</Timeline.Body>
                        <Timeline.Time>{event.date}</Timeline.Time>
                      </Timeline.Content>
                    </Timeline.Item>
                  ))}
                </Timeline>
              )}
              <div className='flex justify-center mt-4'>
                <Link
                  className='ree p-2 rounded flex items-center hover:underline'
                  onClick={handleDropdownToggle}
                  to='#'
                >
                  Full Event History
                  <FontAwesomeIcon
                    icon={isDropdownOpen ? faChevronUp : faChevronDown}
                    className='ml-2'
                  />
                </Link>
              </div>
              {isDropdownOpen && !isMobile && (
                <div className='mt-4 bg-white rounded shadow-md overflow-auto'>
                  <table className='min-w-full bg-white'>
                    <thead>
                      <tr>
                        <th className='osm py-2 px-4 border-b text-left'>
                          DESCRIPTION
                        </th>
                        <th className='osm py-2 px-4 border-b text-left'>
                          DATE / TIME
                        </th>
                        <th className='osm  px-4 border-b text-left'>
                          LOCATION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='bg-gray-200'>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {trackingDetailsnow.returned}
                        </td>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {formatTimestamp(trackingDetailsnow.shipped_date)}
                        </td>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {trackingDetailsnow.shippedLocation}
                        </td>
                      </tr>
                      <tr>
                        <td className='osm py-2 px-4 border-b text-left'>
                          Grouped at Landmark facility
                        </td>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {formatTimestamp(trackingDetailsnow.shipped_date)}
                        </td>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {trackingDetailsnow.shippedLocation}
                        </td>
                      </tr>
                      <tr className='bg-gray-200'>
                        <td className='osm py-2 px-4 border-b text-left'>
                          Received at return handling facility
                        </td>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {trackingDetailsnow.estimatedDelivery}
                        </td>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {trackingDetailsnow.shippedLocation}
                        </td>
                      </tr>
                      <tr>
                        <td className='osm py-2 px-4 border-b text-left'>
                          Shipment Data Uploaded
                        </td>
                        <td className='osm py-2 px-4 border-b text-left'>
                          {trackingDetailsnow.estimatedDelivery}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-4 md:px-20 mx-auto justify-center lg:w-[90%] w-full'>
              <div className='bg-white p-4 md:p-10 rounded-lg shadow-md'>
                <h3 className='mb-4 text-[24px] leading-[37px] text-[#2b353d]'>
                  Shipment Details
                </h3>
                <p className='mb-4  text-[16px] leading-[25px] text-[#6c757d]'>
                  ORDER REFERENCE
                </p>
                <p className='mb-4 text-[16px] leading-[25px] text-[#2b353d] uppercase'>
                  40959R0803769852
                </p>
                <div className='mt-4'>
                  <p className='mb-4   text-[16px] leading-[25px] text-[#6c757d] '>
                    PACKAGE REFERENCE
                  </p>
                  <p className='text-[16px] leading-[25px] text-[#2b353d]'>
                    N/A
                  </p>
                </div>
              </div>
              <div className='bg-white p-4 md:p-10 rounded-lg shadow-md'>
                <h3 className='mb-4 text-[24px] leading-[37px] text-[#2b353d]'>
                  Delivery Details
                </h3>
                <p className='mb-4 text-[16px] leading-[25px] text-[#6c757d]'>
                  DELIVERY PARTNER
                </p>
                <div className='mb-4 text-[16px] leading-[25px] text-[#2b353d] uppercase  flex p-0 m-0 '>
                  <p className='text-[13px] md:w-[150px] w-[200px]'>
                    Canada Post
                  </p>
                  <span className='underline underline-[#2b353d] flex gap-1 w-full text-[16px] items-center'>
                    61210001422700810803769852
                    <svg viewBox='0 0 16 17' className='w-5 h-5' fill='#005f85'>
                      <path d='M4.2914 2.94H7.74433C7.8824 2.94 7.99433 3.05193 7.99433 3.19V3.84729C7.99433 3.98536 7.8824 4.09729 7.74433 4.09729H4.2914C3.90795 4.09729 3.59711 4.40817 3.59711 4.79167V12.1983C3.59711 12.5818 3.90795 12.8927 4.2914 12.8927H11.6973C12.0807 12.8927 12.3916 12.5818 12.3916 12.1983V8.745C12.3916 8.60693 12.5035 8.495 12.6416 8.495H13.2987C13.4368 8.495 13.5487 8.60693 13.5487 8.745V12.1983C13.5487 13.221 12.7198 14.05 11.6973 14.05H4.2914C3.26887 14.05 2.43994 13.221 2.43994 12.1983V4.79167C2.43994 3.76902 3.26887 2.94 4.2914 2.94ZM9.8724 2.94123C9.73433 2.94123 9.6224 3.05315 9.6224 3.19123V3.86962C9.6224 4.00769 9.73433 4.11962 9.8724 4.11962H11.5534L7.75354 7.91993C7.65593 8.01756 7.65593 8.17584 7.75354 8.27347L8.21825 8.73822C8.31588 8.83587 8.47419 8.83587 8.57182 8.73822L12.3717 4.93795V6.6192C12.3717 6.75727 12.4836 6.8692 12.6217 6.8692H13.2999C13.438 6.8692 13.5499 6.75727 13.5499 6.6192V3.19123C13.5499 3.05315 13.438 2.94123 13.2999 2.94123L9.8724 2.94123Z'></path>
                      <path d='M4.2914 2.94H7.74433C7.8824 2.94 7.99433 3.05193 7.99433 3.19V3.84729C7.99433 3.98536 7.8824 4.09729 7.74433 4.09729H4.2914C3.90795 4.09729 3.59711 4.40817 3.59711 4.79167V12.1983C3.59711 12.5818 3.90795 12.8927 4.2914 12.8927H11.6973C12.0807 12.8927 12.3916 12.5818 12.3916 12.1983V8.745C12.3916 8.60693 12.5035 8.495 12.6416 8.495H13.2987C13.4368 8.495 13.5487 8.60693 13.5487 8.745V12.1983C13.5487 13.221 12.7198 14.05 11.6973 14.05H4.2914C3.26887 14.05 2.43994 13.221 2.43994 12.1983V4.79167C2.43994 3.76902 3.26887 2.94 4.2914 2.94ZM9.8724 2.94123C9.73433 2.94123 9.6224 3.05315 9.6224 3.19123V3.86962C9.6224 4.00769 9.73433 4.11962 9.8724 4.11962H11.5534L7.75354 7.91993C7.65593 8.01756 7.65593 8.17584 7.75354 8.27347L8.21825 8.73822C8.31588 8.83587 8.47419 8.83587 8.57182 8.73822L12.3717 4.93795V6.6192C12.3717 6.75727 12.4836 6.8692 12.6217 6.8692H13.2999C13.438 6.8692 13.5499 6.75727 13.5499 6.6192V3.19123C13.5499 3.05315 13.438 2.94123 13.2999 2.94123L9.8724 2.94123Z'></path>
                    </svg>
                  </span>
                </div>
                <div className='mt-4'>
                  <p className='mb-4  text-[16px] leading-[25px] text-[#6c757d] '>
                    LANDMARK TRACKING NUMBER
                  </p>
                  <p className='text-[16px] leading-[25px] text-[#2b353d] '>
                    LTN45454544
                  </p>
                </div>
              </div>
              <div
                className='paragraph-truncate-5 cursor-pointer user-select-none text-truncate bg-white p-4 md:p-10 rounded-lg shadow-md  col-span-1 md:col-span-2 '
                id='clearance-statement-66891fd8be132'
                onClick='toggleTruncate(["clearance-statement-66891fd8be132", "clearance-statement-66891fd8be133"], true)'
              >
                <h1 className='mb-4 text-[24px] leading-[37px] text-[#2b353d]'>
                  Clearance Statement
                </h1>
                By ordering goods from Hautelook.com, I hereby authorize
                Landmark Trade Services Ltd., a licensed Canadian Customs
                Broker, to act as m agent, and to transact business with the
                CBSA, to obtain release of my merchandise, account for duties
                and taxes, and prepare and submit refund claims on my behalf for
                any orders that were misdeclared to CBSA.
                <br />I understand that the CBSA will send any refund of duties
                and taxes that were paid on misdeclared orders to Landmark Trade
                Services Ltd., and that I will obtain any refunds associated
                with misdeclared orders directly from Hautelook.com. Further, I
                also authorize Landmark Trade Services Ltd. to forward any
                refund issued by the CBSA in my name to Hautelook.com so they
                can be reimbursed. I also waive my need for any receipt of this
                transaction which may include classification of goods,
                transaction number, and a breakdown of duties and taxes.
              </div>
            </div>

            <FooterTracking />
          </div>
        )
      )}
    </>
  );
};

export default TrackingDetails;
