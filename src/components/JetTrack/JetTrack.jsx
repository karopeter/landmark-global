import React from 'react'
import { assets } from '../../assets/assets'

const JetTrack = () => {
    const styles = {
        backgroundImage: `url(${assets.shipment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",  // Adjusted minHeight for responsiveness
        padding: "30px",
        display: "flex",
        justifyContent: "center",
       alignItems: "center",
    };
  return (
    <div>
       <div style={styles}>
      <div className="bg-white p-4 md:p-10 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
        <div>
            <h2 className='md:text-2xl text-3xl font-bold parrr tracking-wide'>Track Your Shipment</h2>
            <p className='text-lg leading-[34px] md:text-[18px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
            Locate and check the release of your
            <br />
             US & Canada shipments.
            </p>
            <p className='text-lg leading-[34px] md:text-[18px] font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
              Select your platform
            </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
  <button
    type="button"
    className="d-button d-button--outlined-inverted whitespace-nowrap group-hover:text-primary group-hover:border-[#2E5D74] group-hover:bg-[#2E5D74] w-full md:w-auto"
  >
    PARS
  </button>
  <div>
    <button
      type="button"
      className="p-button p-button--outlined-inverted whitespace-nowrap group-hover:text-primary group-hover:border-[#2E5D74] group-hover:bg-[#2E5D74] w-full md:w-auto"
    >
      PARS
    </button>
  </div>
</div>

      </div>
    </div>
    </div>
  )
}

export default JetTrack
