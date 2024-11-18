import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaShieldAlt, FaClock, FaExpand } from 'react-icons/fa';

const Offer = () => {
    const ways = [
        {
            title: "Unmatched Network",
            subTitle: "Never miss a beat with resilient networks designed to withstand disruptions and ensure continuous information flow.",
            icon: FaNetworkWired
        },
        {
            title: "Enhanced Security",
            subTitle: "Protect sensitive data with robust encryption and access controls, safeguarding your critical communication channels.",
            icon: FaShieldAlt
        },
        {
            title: "Real-Time",
            subTitle: "Foster efficient communication and decision-making among your teams, regardless of their location.",
            icon: FaClock
        },
        {
            title: "Scalability & Flexibility",
            subTitle: "Adapt to your evolving needs with solutions that scale seamlessly and integrate effortlessly with existing infrastructure.",
            icon: FaExpand
        }
    ];

    return (
        <section className='py-24 bg-white'>
            <div className='container mx-auto px-4 md:px-16'>
                {/* Improved Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-primary text-lg font-medium uppercase tracking-wider"
                    >
                        Mission Critical Solutions
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#01241F] mt-4 mb-6"
                    >
                        Empowering Your <br/>
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                            Communication Infrastructure
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        Discover our comprehensive suite of features designed to enhance your network capabilities
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {ways.map(({ title, subTitle, icon: Icon }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='group relative bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300'
                        >
                            {/* Number */}
                            <div className="absolute top-6 right-6">
                                <span className="text-6xl font-bold text-primary/5">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                    <Icon className="text-2xl text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                <h3 className='text-xl font-bold text-[#01241F] group-hover:text-primary transition-colors duration-300'>
                                    {title}
                                </h3>
                                <p className='text-gray-600 leading-relaxed'>
                                    {subTitle}
                                </p>
                            </div>

                            {/* Bottom Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1">
                                <div className="h-full bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Offer;
