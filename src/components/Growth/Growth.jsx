import React from 'react';
import "./Growth.css";

const Growth = () => {
  return (
    <>
      <div className="video-containerr">
      <video autoPlay muted loop id="bg-videoo">
        <source src="https://com.landmarkglobal.com/uploads/videos/Untitled-1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div class="overlayy">
      <h1>
      Find out how we can enable your
         <br />
       ecommerce growth.
      </h1>
      <button type='button' className='btn-ghost hover:bg-gray-700 text-white mt-4 py-2 px-4 rounded'>Get In Touch</button>
    </div>
      </div>
    </>
  );
}

export default Growth
