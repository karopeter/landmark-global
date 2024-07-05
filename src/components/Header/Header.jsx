import React from 'react';
import { Link } from 'react-router-dom';
import LogServices from '../LogServices/LogServices';
import "./Header.css";

const Header = () => {
  return (
    <>
    <div className="video-container">
      <video autoPlay muted loop id="bg-video">
        <source src="https://landmarkglobal.com/uploads/videos/Landmark-Main-Short-Film-4-July-5.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <div className="content">
          <h1>Open Your World</h1>
          <p>
            The trusted international logistics partner, 
            <br />
            powering your ecommerce growth.
            </p>
          <button className="get-in-touch-btn">Get in Touch</button>
        </div>
      </div>
      <section className="background-section">
      <h2 className="text-center mt-8 text-white heading">Our Fully Integrated Logistics Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/parcel-delivery">
          <LogServices title="Parcel Delivery" buttonText="Learn More" />
        </Link>
        <Link to="/fulfilment-solutions">
          <LogServices title="Fulfilment Solutions" buttonText="Learn More" />
        </Link>
        <Link to="/trade-services">
          <LogServices title="Trade Services" buttonText="Learn More" />
        </Link>
      </div>
    </section>
    </div>
    </>
  );
}

export default Header;