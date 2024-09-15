import React from 'react';
import { motion } from 'framer-motion';

const Ways = () => {
  const ways = [
    {
      title: "Tailored Solutions for You",
      subTitle: "We deliver innovative connectivity solutions tailored to meet the unique needs of our clients, utilizing cutting-edge technologies and strategic partnerships."
    },
    {
      title: "Africa's Digital Evolution",
      subTitle: "Committed to setting new standards in technological advancement and connectivity, we aspire to lead Africa's digital transformation, ensuring reliable and seamless connectivity for all."
    },
    {
      title: "Customer-Centric Approach",
      subTitle: "At SafariLink ISP, we prioritize customer satisfaction and engagement, offering personalized solutions and unparalleled support to ensure our clients' success in the rapidly evolving digital landscape."
    }
  ];

  return (
    <section className='my-16'>
      <div className='container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8'>
        {ways.map(({ title, subTitle }, index) => (
          <motion.div
            key={index}
            className='p-8 text-center sm:text-left'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className='bg-gradient-to-r from-[#3752a32a] to-[#0969762d] text-transparent bg-clip-text font-medium text-[9.5rem]'>
              0{index + 1}
            </span>
            <div>
              <div className='mt-[-8rem]'>
                <h3 className='text-primary text-3xl md:w-72 mb-3'>{title}</h3>
                <p className=' text-[#4e4e4e] text-[1rem] mb-6 pr-1'>
                  {subTitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ways;
