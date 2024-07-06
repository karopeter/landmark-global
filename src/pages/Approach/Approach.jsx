import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { assets } from '../../assets/assets';
import "./Approach.css";
import Operation from '../../components/Operation/Operation';
import Driven from '../../components/Driven/Driven';
import Touch from '../../components/Touch/Touch';
import Growth from '../../components/Growth/Growth';

const Approach = () => {
  return (
    <div>
      <Navbar />
      <div className='pree min-h'>
        <Operation
         imageSrc={assets.woman} 
         method="Our Approach"
         />
      </div>
      <Driven />
      <div className='touch min-h'>
          <Touch 
            method="With a Personal Touch"
          />
      </div>
      <Growth />
      <Footer />
    </div>
  )
}

export default Approach
