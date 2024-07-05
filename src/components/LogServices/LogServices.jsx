import React from 'react'
import "./LogServices.css";

const LogServices = ({title, buttonText}) => {
  return (
    <div className="relative-container">
      <div className="overlay"></div>
      <h2 className="text-xl font-bold mb-2 head-title">{title}</h2>
      <button className="learn-more-btn mt-auto">{buttonText}</button>
  </div>
  )
}

export default LogServices  
