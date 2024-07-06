
import CountUp from 'react-countup';

const Flow  = ({
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
              end={`${16}`}
              className='text-[#2E5D74] text-[72px] md:text-[128px]  font-black  '
            />
            m
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-4'>
            {description1}
          </p>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-center text-center'>
          <h1 className='calls font-bold  m-0 md:mb-3'>
            <CountUp
              delay={2}
              end={`${8}`}
              className=' text-[#2E5D74] text-[72px] md:text-[128px]  font-black  '
            />
            m
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-2'>
            {description2}
          </p>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-center text-center'>
          <h1 className='text-[#2E5D74] text-[72px] md:text-[128px]  font-black   m-0 md:mb-3'>
            <CountUp
              delay={2}
              end={`${2}`}
              className=' text-[#2E5D74] text-[72px] md:text-[128px]  font-black  mb-3'
            />
            b $
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-2'>
            {description3}
          </p>
        </div>
      </div>
    </>
  );
};

export default Flow;
