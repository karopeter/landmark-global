import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TradeInclude from '../../components/TradeInclude/TradeInclude';
import Flow from '../../components/Flow/Flow';
import TradeFull from '../../components/TradeFull/TradeFull';
import JetTrack from '../../components/JetTrack/JetTrack';
import { assets } from '../../assets/assets';
import Growth from '../../components/Growth/Growth';

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
      <Flow  
        description1="trade services per year"
        description2="unique products cleared per year"
        description3="managed cashflow"
      />
      <JetTrack />
      <section className=' bg-[#174359] pb-16 pt-10 lg:pt-16 lg:pb-28'>
        <div>
        <TradeFull />
        </div>
      </section>
      <Growth />
      <Footer />
    </div>
  )
}

export default Business
