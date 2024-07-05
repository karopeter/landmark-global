import React from 'react'
import Header from '../../components/Header/Header';
import ExploreWorld from '../../components/ExploreWorld/ExploreWorld';
import Solutions from '../../components/Solutions/Solutions';
import Growth from '../../components/Growth/Growth';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
     <Header /> 
     <ExploreWorld />
     <Solutions />
     <Growth />
     <Footer />
    </div>
  )
}

export default Home
