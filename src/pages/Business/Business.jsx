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
          clearance="Business to Business Clearances"
          tax="Trade and Tax Consulting"
          health="Health Canada Licensed Facilities"
          compass="Landed Cost Calculator - Compass"
          refund="Duty and Tax Refunds"
          software="eManifest Software"
          imageSrc={assets.walls}
        />
      </div>
    </div>
  )
}

export default Business
