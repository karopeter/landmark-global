import React from 'react';
import { assets } from '../../assets/assets';
import Trade from '../Trade/Trade';
import Ship from '../Ship/Ship';
import "./Solutions.css";

const Solutions = () => {
  return (
   <>
     <div className='pree min-h'>
       <Ship imageSrc={assets.solutions} method="Fulfillment Solutions" learn="Learn More" />
    </div>
    <Trade imageSrc={assets.math} method="Trade Services" learn="Learn More" />
   </>
  )
}

export default Solutions
