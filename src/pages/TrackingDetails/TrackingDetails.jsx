import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FooterTracking from '../../components/FooterTracking/FooterTracking';
import './TrackingDetails.css';
import MobileTimeLine from '../../components/MobileTimeline/MobileTimeLine';

const TrackingDetails = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const { trackingNumber } = useParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    if (timelineRef.current && lineRef.current) {
      const firstEvent = timelineRef.current.firstChild;
      const lastEvent = timelineRef.current.lastChild;
      if (firstEvent && lastEvent) {
        const startX = firstEvent.offsetLeft + firstEvent.offsetWidth / 2;
        const endX = lastEvent.offsetLeft + lastEvent.offsetWidth / 2;
        lineRef.current.style.left = `${startX}px`;
        lineRef.current.style.width = `${endX - startX}px`;
      }
    }
  }, [timelineEvents]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      facility: 'handling facility',
    };
    return trackingDetails;
  };

  const trackingDetails = fetchTrackingDetails(trackingNumber);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://trackcdn.landmarkglobal.com/resources/images/bg.svg?v=1720101015)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // minHeight: '100vh',
    padding: '0px',
  };

  return (
    <>
      <div style={styles}>
        <div className='flex md:justify-between md:items-center p-4'>
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
        <div className=' pl-4 md:pl-44  mb-2 flex justify-start mx-auto'>
          <h2 className=' link'>40959R · LTN45454544{trackingNumber}</h2>
        </div>
        <div className='bg-white p-[24px] md:p-[32px] h-auto md:w-4/5 w-11/12 justify-center mx-auto rounded-md   flex flex-col'>
          <div className='flex flex-row justify-center items-center md:flex-row  md:justify-between '>
            <div className='px-4  text-[32px] text-[#2B353D] rounded hidden md:flex'>
              <h2>{trackingDetails.completed}</h2>
            </div>
            <div className='flex flex-row gap-10 justify-center items-center md:flex-row md:justify-end'>
              <div className='gap-y-3 flex flex-col'>
                <h3>DELIVERY PARTNER</h3>
                <p className='osm'>
                  {' '}
                  <Link className='text-[#005f85] underline'>Canada Post </Link>
                </p>
              </div>
              <div className='gap-y-2 flex flex-col '>
                <h3>SHIPPING TO</h3>
                <p className='osm'>{trackingDetails.location}</p>
              </div>
            </div>
          </div>
          <div className=' flex flex-col gap-y-2 mb-5'>
            <div className='md:flex justify-start ml-5 hidden '>
              <h3 className='text-[22.4px] text-[#6C757D] font-medium '>
                {' '}
                Item successfully delivered
              </h3>
            </div>
            <div className='hidden md:flex  justify-start ml-5'>
              <p className='text-[16px] text-[#6C757D]'>
                {trackingDetails.york}
              </p>
            </div>
            <div className='hidden md:flex justify-start ml-5'>
              <p className='text-[16px] text-[#6C757D]'>
                {trackingDetails.updated}
              </p>
            </div>
          </div>
          <div className=' md:flex flex-col md:flex-row justify-between'>
            {/* <div className='flex flex-col md:flex-row justify-start'>
              <div className='p-4 m-2 rounded'>
                <strong>Date Received</strong>
                <p className='ree'>{trackingDetails.estimatedDelivery}</p>
              </div>
              <div className='p-4 m-2 rounded'>
                <strong>Shipped</strong>
                <p className='ree'>{trackingDetails.shippedLocation}</p>
                <p className='ree'>{trackingDetails.shippedDate}</p>
              </div>
            </div> */}

            <div className='flex flex-col md:hidden gap-y-2 justify-start mt-6  '>
              <p className='text-[32px] font-medium text-[#2B353D]'>
                Completed{' '}
              </p>
              <span className=' text-[22px] text-[#6C757D] font-medium'>
                Item successfully delivered
              </span>

              <p className='text-[#6C757D] text-[16px]'>
                {trackingDetails.shippedLocation}
              </p>
              <p className='text-[#6C757D] text-[16px]'>
                {' '}
                Updated,{trackingDetails.shippedDate}
              </p>
            </div>
          </div>
          {isMobile ? (
            <MobileTimeLine data={timelineEvents} />
          ) : (
            <div className='card mb-4 overflow-x-auto'>
              <div className='timeline mt-8 flex relative'>
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className='timeline-event flex flex-col items-start mx-4'
                    style={{ minWidth: '150px' }}
                  >
                    <div className='timeline-icon mb-4 relative z-10'>
                      <svg
                        className={`box ${event.completed ? 'dark' : 'light'}`}
                        viewBox='0 0 32 32'
                        fill='none'
                        width='32'
                        height='32'
                      >
                        <rect
                          width='100%'
                          height='100%'
                          rx='6'
                          fill={event.completed ? '#2d4559' : '#e2e8f0'}
                        ></rect>
                      </svg>
                      {event.completed && (
                        <svg
                          className='exclamation absolute top-1 left-1'
                          viewBox='0 0 24 24'
                          fill='none'
                          width='24'
                          height='24'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9.69707 18.3959C9.7947 18.4935 9.95299 18.4935 10.0506 18.3959L20.3037 8.14282C20.4013 8.04519 20.4013 7.88689 20.3037 7.78926L18.5359 6.0215C18.4383 5.92387 18.28 5.92386 18.1823 6.0215L9.87387 14.33L5.80799 10.2641C5.71036 10.1665 5.55207 10.1665 5.45444 10.2641L3.68667 12.0319C3.58904 12.1295 3.58904 12.2878 3.68667 12.3854L7.92617 16.6249C7.9272 16.626 7.92825 16.627 7.9293 16.6281L9.69707 18.3959Z'
                            fill='white'
                          ></path>
                        </svg>
                      )}
                    </div>
                    <div className='timeline-content text-start'>
                      <p className='bold'>{event.status}</p>
                      <p className='text-[#6c757d]'>{event.location}</p>
                      <p className='text-[#6c757d]'>{event.date}</p>
                    </div>
                  </div>
                ))}
                <div
                  className='horizontal-line  dark absolute top-4 left-4 h-3 bg-[#2d4559] z-0 lg:w-[58%]'
                  ref={lineRef}
                ></div>
              </div>
            </div>
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
                    <th className='osm  px-4 border-b text-left'>LOCATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-gray-200'>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.returned}
                    </td>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.shippedDate}
                    </td>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.shippedLocation}
                    </td>
                  </tr>
                  <tr>
                    <td className='osm py-2 px-4 border-b text-left'>
                      Grouped at Landmark facility
                    </td>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.shippedDate}
                    </td>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.shippedLocation}
                    </td>
                  </tr>
                  <tr className='bg-gray-200'>
                    <td className='osm py-2 px-4 border-b text-left'>
                      Received at return handling facility
                    </td>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.estimatedDelivery}
                    </td>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.shippedLocation}
                    </td>
                  </tr>
                  <tr>
                    <td className='osm py-2 px-4 border-b text-left'>
                      Shipment Data Uploaded
                    </td>
                    <td className='osm py-2 px-4 border-b text-left'>
                      {trackingDetails.estimatedDelivery}
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
              <p className='text-[16px] leading-[25px] text-[#2b353d]'>N/A</p>
            </div>
          </div>
          <div className='bg-white p-4 md:p-10 rounded-lg shadow-md'>
            <h3 className='mb-4 text-[24px] leading-[37px] text-[#2b353d]'>
              Delivery Details
            </h3>
            <p className='mb-4 text-[16px] leading-[25px] text-[#6c757d]'>
              DELIVERY PARTNER
            </p>
            <p className='mb-4 text-[16px] leading-[25px] text-[#2b353d] uppercase '>
              {' '}
              canada post
              <span className=' underline underline-[#2b353d]'>
                {' '}
                61210001422700810803769852
              </span>
            </p>
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
            By ordering goods from Hautelook.com, I hereby authorize Landmark
            Trade Services Ltd., a licensed Canadian Customs Broker, to act as m
            agent, and to transact business with the CBSA, to obtain release of
            my merchandise, account for duties and taxes, and prepare and submit
            refund claims on my behalf for any orders that were misdeclared to
            CBSA.
            <br />I understand that the CBSA will send any refund of duties and
            taxes that were paid on misdeclared orders to Landmark Trade
            Services Ltd., and that I will obtain any refunds associated with
            misdeclared orders directly from Hautelook.com. Further, I also
            authorize Landmark Trade Services Ltd. to forward any refund issued
            by the CBSA in my name to Hautelook.com so they can be reimbursed. I
            also waive my need for any receipt of this transaction which may
            include classification of goods, transaction number, and a breakdown
            of duties and taxes.
          </div>
        </div>

        <FooterTracking />
      </div>
    </>
  );
};

export default TrackingDetails;
