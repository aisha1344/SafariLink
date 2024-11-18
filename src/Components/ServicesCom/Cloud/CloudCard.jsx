import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const CloudCard = () => {
  const services = [
    {
      title: "Cloud Infrastructure Services",
      description: "Build a scalable and resilient cloud infrastructure with SafariLink ISP's Cloud Infrastructure Services. Our experts will help you design, deploy, and manage cloud environments tailored to your organization's unique requirements. From virtual servers to storage solutions, we've got you covered.",
      icon: FaCloud,
      image: "https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-6.png?w=960&ssl=1"
    },
    {
      title: "Data Analytics and Business Intelligence",
      description: "Harness the power of data with SafariLink ISP's Data Analytics and Business Intelligence solutions. Utilize AWS's advanced analytics tools to gain valuable insights from your data, drive informed decision-making, and uncover new business opportunities.",
      icon: FaDatabase,
      image: "https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-4.png?w=960&ssl=1"
    },
    {
      title: "Disaster Recovery Solutions",
      description: "Ensure business continuity and data protection with SafariLink ISP's Disaster Recovery Solutions. Leverage AWS's robust infrastructure to replicate and back up critical data, applications, and workloads. Our disaster recovery plans are designed to minimize downtime.",
      icon: FaShieldAlt,
      image: "https://i0.wp.com/terrenova-ict.com/wp-content/uploads/2024/02/ws-23-01-2.png?w=960&ssl=1"
    }
  ];

  return (
    <section className='py-24'>
      {/* Section Header */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl md:text-5xl font-bold text-[#01241F] mb-6'>
          Cloud Solutions Powered by AWS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </motion.div>

      {/* Services */}
      <div>
        {services.map((service, index) => (
          <div key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <div className="container mx-auto px-4 md:px-16 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`relative group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </motion.div>
                </div>

                {/* Updated Content Section */}
                <div className={`space-y-8 ${index % 2 !== 0 ? 'md:order-1 md:pr-8' : 'md:pl-8'}`}>
                  {/* Service Number */}
                  <div className="text-8xl font-bold text-primary/10">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Title and Icon */}
                  <div className="relative -mt-12">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <service.icon className="text-3xl text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#01241F] group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {['Scalable Infrastructure', 'High Availability', '24/7 Support'].map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Decorative Line */}
                    <div className="pt-4">
                      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudCard;
