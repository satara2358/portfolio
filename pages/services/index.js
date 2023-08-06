import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:marker:'>
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mb-0'>
              Services 
              <span className='text-accent'>
                .
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file. API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.js. The pages/api directory is mapped to /api/*. Files in this directory are treated as API routes instead of React pages. 
            </motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default Services;
