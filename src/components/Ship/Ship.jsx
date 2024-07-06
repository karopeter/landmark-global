import '../Leading/Leading.css';

const Ship = ({ imageSrc, method, learn }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-0 md:p-20'>
      <div className='col-span-1 md:col-span-1'>
        <img
          src={imageSrc}
          alt='Image'
          className='object-cover w-full h-full rounded-lg shadow-md'
        />
      </div>

      <div className='col-span-1 md:col-span-1 p-4 md:p-8 lg:p-20'>
        <h2 className='mb-8 mt-5 md:mb-10 md:mt-10 text-3xl md:text-xl text-start font-bold lg:text-4xl md:text-left text-[#2E5D74]'>
          {method}
        </h2>
        <p className='text-lg leading-[34px] md:text-2xl font-normal text-start lg:leading-relaxed mt-4  md:text-left text-[#2E5D74]'>
          Let us take the operation off your hands! <br />
          With the right fulfillment partner, you can <br />
          be free to expand worldwide and focus on <br />
          top line growth.
        </p>
        <button
          type='button'
          className='btn-ghost w-full md:w-fit hover:bg-gray-700 text-white mt-4 py-2 px-4 rounded-md block md:inline-block mx-auto'
        >
          {learn}
        </button>
      </div>
    </div>
  );
};

export default Ship;