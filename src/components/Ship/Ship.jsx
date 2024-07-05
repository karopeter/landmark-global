import React from 'react';
import "../Leading/Leading.css";

const Ship = ({ imageSrc, method, learn }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-20">
      <div className="col-span-1 md:col-span-1">
        <img src={imageSrc} alt="Image" className="object-cover w-full h-full rounded-lg shadow-md" />
      </div>

      <div className="col-span-1 md:col-span-1 p-4 md:p-8 lg:p-20">
        <h1 className="mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-center md:text-left">{method}</h1>
        <p className="text-sm md:text-base leading-relaxed mt-4 text-center md:text-left">
          Let us take the operation off your hands! <br />
          With the right fulfillment partner, you can <br />
          be free to expand worldwide and focus on <br />
          top line growth.
        </p>
        <button type="button" className="btn-ghost hover:bg-gray-700 text-white mt-4 py-2 px-4 rounded block md:inline-block mx-auto">
       {learn}
      </button>
      </div>
    </div>
  );
};

export default Ship;
