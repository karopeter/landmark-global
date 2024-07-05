import  React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tracking from './pages/Tracking/Tracking';
import TrackingDetails from './pages/TrackingDetails/TrackingDetails';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/tracking" element={<Tracking />} />
           <Route path="/tracking/:trackingNumber" element={<TrackingDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
