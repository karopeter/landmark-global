import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tracking from './pages/Tracking/Tracking';
import TrackingDetails from './pages/TrackingDetails/TrackingDetails';
import Parcel from './pages/Parcel/Parcel';
import Approach from './pages/Approach/Approach';
import './App.css';
import Business from './pages/Business/Business';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBpogsR8jYDtCeP3313Ba4Mtm61TrIAMkQ',
  authDomain: 'shiiping-se61q.firebaseapp.com',
  projectId: 'shiiping-se61q',
  storageBucket: 'shiiping-se61q.appspot.com',
  messagingSenderId: '22775458353',
  appId: '1:22775458353:web:f4961ffb984cbb87a50310',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/tracking/:trackingNumber' element={<TrackingDetails />} />
        <Route path='/parcel-delivery' element={<Parcel />} />
        <Route path='/approach' element={<Approach />} />
        <Route path='/trade-service' element={<Business />} />
      </Routes>
    </>
  );
}

export default App;
