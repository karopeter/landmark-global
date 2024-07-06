import './Leading.css';
import CountUp from 'react-countup';

const Leading = ({
  title1,
  title2,
  title3,
  description1,
  description2,
  description3,
  imageSrc,
  method,
  learn,
}) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-16   '>
        <div className='col-span-1 flex flex-col items-center justify-center text-center'>
          <h1 className='text-[#2E5D74] text-[72px] md:text-[128px]  font-black  m-0 md:mb-3'>
            <CountUp
              delay={2}
              end={`${550}`}
              className='text-[#2E5D74] text-[72px] md:text-[128px]  font-black  '
            />
            +
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-4'>
            {description1}
          </p>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-center text-center'>
          <h1 className='calls font-bold  m-0 md:mb-3'>
            <CountUp
              delay={2}
              end={`${75}`}
              className=' text-[#2E5D74] text-[72px] md:text-[128px]  font-black  '
            />
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-2'>
            {description2}
          </p>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-center text-center'>
          <h1 className='text-[#2E5D74] text-[72px] md:text-[128px]  font-black   m-0 md:mb-3'>
            <CountUp
              delay={2}
              end={`${25}`}
              className=' text-[#2E5D74] text-[72px] md:text-[128px]  font-black  mb-3'
            />
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-2'>
            {description3}
          </p>
        </div>
      </div>
    </>
  );
};

export default Leading;