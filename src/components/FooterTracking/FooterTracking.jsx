import { Link } from 'react-router-dom';
import './FooterTracking.css';

const FooterTracking = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-start md:justify-center gap-10 md:gap-20 mt-10 p-10'>
        <div>
          <Link className='mert'>PRIVACY</Link>
        </div>
        <div>
          <Link className='mert'>TERMS & CONDITION</Link>
        </div>
        <div>
          <Link className='mert'>OUR WEBSITE</Link>
        </div>
      </div>
      <p className='text-center land px-10 py-5 '>
        © 2005-2024 Landmark Global Inc. All Rights Reserved.
      </p>
    </>
  );
};

export default FooterTracking;
