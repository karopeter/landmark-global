import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Delivery from '../../components/Delivery/Delivery';
import JetLag from '../../components/JetLag/JetLag';
import { assets } from '../../assets/assets';
import "./Parcel.css";
import Domestic from '../../components/Domestic/Domestic';
import PortalVast from '../../components/PortalVast/PortalVast';

const Parcel = () => {
  return (
    <div>
        <Navbar />
        <div className='pree min-h'>
           <Delivery imageSrc={assets.parcel} method="Parcel Delivery" />
        </div>
        <JetLag 
          imageSrc={assets.jetlag} 
          method="International Parcel Delivery"
          leading="The leading carrier to Canada" 
          features="Our International Parcel Delivery key features include:"
          dropoff="Local pickup & drop off"
          end="End-to-end tracking"
          options="Economy & priority options"
          intelligence="Carrier neutral intelligence"
          expert="Import/export expertise"
          duty="Returns & duty drawback"
          services="International Parcel Delivery services:"
        />
        <div className="pree min-h">
            <Domestic 
             imageSrc={assets.Dilli}
              method="Domestic Parcel Delivery" 
              features="Domestic Parcel delivery key features:"
              add="Address verification"
              proof="Proof of delivery"
              every="Delivery to every address"
              track="End-to-end tracking"
              fees="No hidden fees"
              locate="Convenient pick-up and drop-off locations"
              />
        </div>
        <PortalVast 
         features="Return Service key features include:"
         dropoff="In-country return address"
         end="Reships and restocking"
         options="End-to-end tracking"
         intelligence="Integration into leading experience platforms"
         expert="Transportation to client distribution center"
         duty="Convenient drop-off locations"
         product="Online label production with return management"
         draw="Duty drawback, credits program and reporting"
         content="Processing and content verification"
        />
        <Footer />
    </div>
  )
}

export default Parcel
