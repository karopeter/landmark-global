import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TradeInclude from '../../components/TradeInclude/TradeInclude';
import { assets } from '../../assets/assets';

const Business = () => {
  return (
    <div>
      <Navbar />
      <div className="pree min-h">
        <TradeInclude
          method="Trade Services"
          features="Our Trade Services include:"
          consumer="Business to Consumer Clearances"
          product="Product and Labeling Consulting"
          duty="Duty and Tax Optimization"
          imageSrc={assets.walls}
        />
      </div>
    </div>
  )
}

export default Business
