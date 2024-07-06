import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { assets } from '../../assets/assets';
import "./Approach.css";
import Operation from '../../components/Operation/Operation';

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
    </div>
  )
}

export default Approach
