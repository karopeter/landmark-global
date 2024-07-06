
import './Trade.css';

const Trade = ({ imageSrc, method, learn }) => {
  return (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-20'>
      <div className='col-span-1 md:col-span-1 p-4 md:p-8 lg:p-20'>
        <h2 className='mb-8 mt-5 md:mb-10 md:mt-10 text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>
          {method}
        </h2>
        <p className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
          Our in-house compliance teams are experts
          <br />
          in clearing your products all over the world.
        </p>
        <button
          type='button'
          className='btn-ghost w-full md:w-fit mb-10 hover:bg-gray-700 text-white mt-4 py-2 px-4 rounded block md:inline-block mx-auto'
        >
          {learn}
        </button>
      </div>

      <div className='col-span-1 md:col-span-1'>
        <img
          src={imageSrc}
          alt='Image'
          className='object-cover w-full  h-full rounded-lg shadow-md'
        />
      </div>
    </div>
  );
};

export default Trade;