import { Link } from 'react-router-dom';
import Leading from '../Leading/Leading';
import './ExploreWorld.css';
import { assets } from '../../assets/assets';

const ExploreWorld = () => {
  return (
    <>
      <div className='parcel-menu pt-10 px-10  md:p-20 text-center'>
        <h1 className='md:text-4xl text-3xl font-bold parrr tracking-wide'>
          Parcel Delivery made easy
        </h1>
        <p className='text-xl pt-8 md:p-8 font-normal parrr leading-relaxed'>
          At Landmark Global we are experts in transporting, clearing, and
          delivering ecommerce
          <br />
          products directly to customers all over the world.
        </p>
        <Link
          to='/learn-more'
          className='parrr underline mt-2 inline-block text-xl font-normal hover:text-red-500'
        >
          Learn More
        </Link>
      </div>
      <Leading
        title1='550+'
        title2='75'
        title3='25'
        description1='leading ecommerce customers'
        description2='commercial partners'
        description3='facilities across 4 continents'
      />
      <div className='space'>
        <img src={assets.map} alt='#' className='img shadow-md' />
      </div>
    </>
  );
};

export default ExploreWorld;