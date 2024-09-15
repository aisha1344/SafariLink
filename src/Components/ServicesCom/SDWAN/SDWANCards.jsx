import React, { memo } from 'react';
import { motion } from 'framer-motion';
import switchImage from "../../../assets/images/switch1.jpg";
import routerim from "../../../assets/images/router.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SDWANCards = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <motion.h3
        className="text-3xl md:text-5xl text-center text-primary my-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Our Focus
      </motion.h3>

      {/* Cards */}
      <div className="space-y-16">
        {/* Card 1 */}
        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <img
              src={switchImage}
              alt="Switch"
              className="w-full h-auto"
              loading="lazy" 
            />
          </div>
          <div className="py-6 md:py-0 md:px-16 text-center md:text-left">
            <span className="bg-gradient-to-r from-[#3752a338] to-[#0969762d] text-transparent bg-clip-text font-medium text-7xl md:text-[12rem] text-center block">01</span>
            <h3 className="text-2xl md:text-3xl mb-4 text-primary mt-[-3rem] md:mt-[-4rem]">Advanced Technology Integration</h3>
            <p className="text-base md:text-[1.1rem] max-w-full md:max-w-md text-[#888787] mx-auto md:mx-0">SafariLink ISP integrates Peplink's advanced SD-WAN technology into its network infrastructure, leveraging the capabilities of Peplink devices to optimize connectivity and enhance network performance. Peplink devices are renowned for their reliability, security, and flexibility, making them an ideal choice for enterprise-grade SD-WAN deployments.</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="py-6 md:py-0 md:px-16 order-last md:order-first text-center md:text-left">
            <span className="bg-gradient-to-r from-[#3752a338] to-[#0969762d] text-transparent bg-clip-text font-medium text-7xl md:text-[12rem] text-center block">02</span>
            <h3 className="text-2xl md:text-3xl mb-4 text-primary mt-[-3rem] md:mt-[-4rem]">Multi-WAN Support</h3>
            <p className="text-base md:text-[1.1rem] max-w-full md:max-w-md text-[#888787] mx-auto md:mx-0">Peplink devices support multiple WAN connections, allowing SafariLink ISP to aggregate bandwidth from diverse sources such as DSL, cable, fiber, and cellular networks. This multi-WAN capability enables load balancing and failover protection, ensuring uninterrupted connectivity and minimizing downtime for businesses.</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://5gstore.com/images/p_10827.jpg"
              alt="Router"
              className="w-full h-auto"
              loading="lazy" 
            />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <img
              src="https://imagedelivery.net/ELltIDciDa6C0z-Ffk6NgQ/www.peplink.com/2020/11/speedfusion-bandwidth-ovreflow_bandwidth-overflow_bandwidth-overflow_bandwidth-overflow.png/w=992,h=913"
              alt="Speedfusion"
              className="w-full h-auto"
              loading="lazy" 
            />
          </div>
          <div className="py-6 md:py-0 md:px-16 text-center md:text-left">
            <span className="bg-gradient-to-r from-[#3752a338] to-[#0969762d] text-transparent bg-clip-text font-medium text-7xl md:text-[12rem] text-center block">03</span>
            <h3 className="text-2xl md:text-3xl mb-4 text-primary mt-[-3rem] md:mt-[-4rem]">Intelligent Traffic Routing</h3>
            <p className="text-base md:text-[1.1rem] max-w-full md:max-w-md text-[#888787] mx-auto md:mx-0">With Peplink's intelligent traffic routing algorithms, SafariLink ISP optimizes the distribution of network traffic across available WAN links based on factors such as latency, packet loss, and bandwidth availability. This dynamic path selection ensures that critical applications receive priority access to network resources, maximizing performance and user experience.</p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="py-6 md:py-0 md:px-16 text-center md:text-left">
            <span className="bg-gradient-to-r from-[#3752a338] to-[#0969762d] text-transparent bg-clip-text font-medium text-7xl md:text-[12rem] text-center block">04</span>
            <h3 className="text-2xl md:text-3xl mb-4 text-primary mt-[-3rem] md:mt-[-4rem]">Secure VPN Connectivity</h3>
            <p className="text-base md:text-[1.1rem] max-w-full md:max-w-md text-[#888787] mx-auto md:mx-0">Peplink devices support secure VPN (Virtual Private Network) connectivity, allowing SafariLink ISP to create encrypted tunnels between distributed locations, remote workers, and cloud resources. This secure VPN connectivity ensures data privacy and confidentiality, safeguarding sensitive information from unauthorized access and cyber threats.</p>
          </div>
          <div className="flex items-center">
            <img
              src={routerim}
              alt="Router"
              className="w-full h-auto"
              loading="lazy" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(SDWANCards);
