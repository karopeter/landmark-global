import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer p-20 bg-[#174359]'>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between w-full'>
        <div className='mb-8 mr-0 md:mb-0 md:mr-8 flex flex-col justify-center md:flex-col items-center md:items-start'>
          <img
            src={assets.logo1}
            alt='logo image'
            className='foot-logo h-20 md:h-28'
          />
          <button className='bg-white text-[#174359] font-bold py-2 px-4 rounded hover:bg-[#357ec7] hover:text-white transition duration-300 mt-4'>
            Get in Touch
          </button>
          <div className='flex flex-col md:flex-row justify-center md:justify-between gap-3 md:gap-20 items-center mt-8 text-white'>
            <div className='mb-4 md:mb-0 md:text-base text-sm'>
              © All rights reserved 2022
            </div>
            <div className='mb-4 md:mb-0 md:text-base text-sm'>Contact</div>
            <div className='mb-4 md:mb-0 md:text-base text-sm'>
              Mercury Log in
            </div>
            <div className='mb-4 md:mb-0 md:text-base text-sm'>Careers</div>
            <div className='mb-4 md:mb-0 md:text-base text-sm'>
              <Link to='' className='hover:underline flex items-center'>
                <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6 mr-2' />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center  flex-col md:flex-row items-center md:items-start gap-9'>
          <div className='text-white mb-8 md:mb-0 md:mr-8 flex justify-center flex-col'>
            <h1 className='text-xl font-bold mb-4'>Our Solutions</h1>
            <ul className='space-y-2 '>
              <li>
                <Link to='' className='hover:underline'>
                  Parcel Delivery
                </Link>
              </li>
              <li>
                <p  className='hover:underline'>
                  Fulfillment Solutions
                </p>
              </li>
              <li>
                <Link to='' className='hover:underline'>
                  Trade Services
                </Link>
              </li>
              <li className='hover:underline'>Privacy Policy</li>
            </ul>
          </div>
          <div className='text-white mb-8 md:mb-0 md:mr-8'>
            <h1 className='text-xl font-bold mb-4  text-white'>Approach</h1>
            <ul className='space-y-2 flex justify-center flex-col'>
              <li>
                <Link to='' className='hover:underline'>
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to='' className='hover:underline'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='text-white mb-8 md:mb-0 '>
            <h1 className='text-xl font-bold mb-4'>Policies</h1>
            <ul className='space-y-2 flex justify-center flex-col'>
              <li>
                <Link to='' className='hover:underline'>
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link to='' className='hover:underline'>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to='' className='hover:underline'>
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to='' className='hover:underline'>
                  Canadian Accessibility Policy
                </Link>
              </li>
              <li>
                <Link to='' className='hover:underline'>
                  Modern Slavery Act
                </Link>
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Footer;
