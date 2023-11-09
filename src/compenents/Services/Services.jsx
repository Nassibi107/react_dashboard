
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const service = [
    { id: 1, name: 'Mega', package: 5 },
    { id: 2, name: 'Golden', package: 5 },
    // { id: 3, name: 'Beta', package: 2 },
    // { id: 4, name: 'Gama', package: 1 },
  ];

  const scrollFromLeftVariants = {
    hidden: { x: -3000 },
    visible: { x: 0, transition: { type: 'tween', duration: 0.8 } },
  };

  const navigate = useNavigate()

  return (
    <div className='container mx-auto'>
    <h1 className="p-relative">All Service : </h1>
      <div className='fwrapper d-grid gap-20'>
        {service.map((serviceItem, index) => (
          <motion.div
            key={serviceItem.id}
            className='md:w-1/2 w-full my-1 cursor-pointer shadow-lg mx-1 md:my-1 bg-white rounded-md hover:bg-white transition-all duration-500'
            initial='hidden'
            animate='visible'
            variants={scrollFromLeftVariants}
            onClick={() => {
              navigate(`/Services/package/${serviceItem.name}`);
            }}
          >
            <div className='text-center pt-10 hover:scale-90 transition-all duration-500'>
              <h3 className='text-4xl mt-5 text-black'>{serviceItem.name}</h3>
              <div className='flex justify-end items-center mr-2 mt-[28px]'>
                <span className='text-black font-semibold'>{serviceItem.package}&nbsp;</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-8 h-8 my-1">
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
    </    svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
