

function MobileTimeLine({ data }) {
  return (
    <div className='w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20 '>
      <div className=' mt-10 border-l-[#2d4559] border-l-[12px]'>
        {data.map((item, index) => (
          <div
            key={index}
            className=' transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-3 shadow-lg rounded text-[#2b353d] bg-white mb-10 flex-col md:flex-row space-y-4 md:space-y-0'
          >
            <div className='w-9 h-9 bg-[#2d4559] absolute -left-[46px] transform -translate-x-2/4 rounded-md z-10  md:mt-0'>
              <svg
                className='exclamation absolute top-1 left-[7px]'
                viewBox='0 0 24 24'
                fill='none'
                width='24'
                height='24'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.69707 18.3959C9.7947 18.4935 9.95299 18.4935 10.0506 18.3959L20.3037 8.14282C20.4013 8.04519 20.4013 7.88689 20.3037 7.78926L18.5359 6.0215C18.4383 5.92387 18.28 5.92386 18.1823 6.0215L9.87387 14.33L5.80799 10.2641C5.71036 10.1665 5.55207 10.1665 5.45444 10.2641L3.68667 12.0319C3.58904 12.1295 3.58904 12.2878 3.68667 12.3854L7.92617 16.6249C7.9272 16.626 7.92825 16.627 7.9293 16.6281L9.69707 18.3959Z'
                  fill='white'
                ></path>
              </svg>
            </div>
            <div className='w-10 h-1 bg-[#2d4559] absolute -left-10 z-0 invisible'></div>
            <div className='flex-auto w-full'>
              <h1 className='text-lg'>{item.date}</h1>
              <h1 className='text-xl font-bold'>{item.title}</h1>
              <h1 className='text-xl font-bold'>{item.status}</h1>
              <h3>{item.location}</h3>
            </div>
            <a
              href={item.link}
              className='text-center text-white hover:text-gray-300'
            >
              Download materials
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileTimeLine;
