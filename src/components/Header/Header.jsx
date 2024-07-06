import './Header.css';

const Header = () => {
  return (
    <>
      <div className='video-container h-[50vh]'>
        <video autoPlay muted loop id='bg-video'>
          <source
            src='https://landmarkglobal.com/uploads/videos/Landmark-Main-Short-Film-4-July-5.webm'
            type='video/webm'
          />
          Your browser does not support the video tag.
        </video>
        <div className='text-overlay'>
          <div className='content'>
            <h1>Open Your World</h1>
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
