import './Header.css';
import heroImage from '../../assets/hero.jpg';
const Header = () => {
  return (
    <>
      <div className='video-container h-[50vh]'>
        <video
          id='bg-video'
          autoPlay
          loop
          muted
          playsInline
          className='desktop-video'
        >
          <source
            src='https://landmarkglobal.com/uploads/videos/Landmark-Main-Short-Film-4-July-5.webm'
            type='video/webm'
          />
        </video>
        <img src={heroImage} alt='Hero' className='mobile-image' />
        <div className='text-overlay'>
          <div className='content text-white'>
            <h1 className='text-white'>Open Your World</h1>
            <p>
              The trusted international logistics partner,
              <br />
              powering your ecommerce growth.
            </p>
            <button className='get-in-touch-btn'>Get in Touch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
