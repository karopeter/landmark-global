import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tracking from './pages/Tracking/Tracking';
import TrackingDetails from './pages/TrackingDetails/TrackingDetails';
import Parcel from './pages/Parcel/Parcel';
import Approach from './pages/Approach/Approach';
import './App.css';
import Business from './pages/Business/Business';
import './App.css'


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
