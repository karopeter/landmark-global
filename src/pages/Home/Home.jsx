
import Header from '../../components/Header/Header';
import ExploreWorld from '../../components/ExploreWorld/ExploreWorld';
import Solutions from '../../components/Solutions/Solutions';
import Growth from '../../components/Growth/Growth';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import Design from '../../components/design';

const Home = () => {
  return (
    <div>
      <div className=''>
        <Navbar />
      </div>
      <div>
        <Header />
        <section className=' bg-[#174359] pb-16 pt-10 lg:pt-16 lg:pb-28'>
        
          <div className=''>
            <Design />
          </div>
        </section>
      </div>

      <ExploreWorld />
      <Solutions />
      <Growth />
      <Footer />
    </div>
  );
};

export default Home;