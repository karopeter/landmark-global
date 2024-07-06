import './Leading.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
const Leading = ({ description1, description2, description3 }) => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-16'>
        <div
          ref={ref1}
          className='col-span-1 flex flex-col items-center justify-center text-center'
        >
          <h1 className='text-[#2E5D74] text-[72px] md:text-[128px] font-black m-0 md:mb-3'>
            {inView1 && (
              <CountUp
                delay={1}
                end={550}
                className='text-[#2E5D74] text-[72px] md:text-[128px] font-black'
              />
            )}
            +
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-4'>
            {description1}
          </p>
        </div>
        <div
          ref={ref2}
          className='col-span-1 flex flex-col items-center justify-center text-center'
        >
          <h1 className='calls font-bold m-0 md:mb-3'>
            {inView2 && (
              <CountUp
                delay={1}
                end={75}
                className='text-[#2E5D74] text-[72px] md:text-[128px] font-black'
              />
            )}
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-2'>
            {description2}
          </p>
        </div>
        <div
          ref={ref3}
          className='col-span-1 flex flex-col items-center justify-center text-center'
        >
          <h1 className='text-[#2E5D74] text-[72px] md:text-[128px] font-black m-0 md:mb-3'>
            {inView3 && (
              <CountUp
                delay={1}
                end={25}
                className='text-[#2E5D74] text-[72px] md:text-[128px] font-black mb-3'
              />
            )}
          </h1>
          <p className='text-[#2E5D74] text-[24px] md:text-[30px] font-bold p-2'>
            {description3}
          </p>
        </div>
      </div>
    </>
  );
};
Leading.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string,
  imageSrc: PropTypes.string,
  method: PropTypes.string,
  learn: PropTypes.string,
};

export default Leading;
