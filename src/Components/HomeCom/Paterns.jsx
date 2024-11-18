import React from 'react';
import { motion } from 'framer-motion';

const Partnership = () => {
    const partners = [
        {
            id: 1,
            title: "Peplink",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8BX0Rjrb447ErC3narcMCDyfAO_hR4U5cw&s"
        },
        {
            id: 2,
            title: "Bitdefender",
            image: "https://www.businessdirectoryindia.in/media/442/small/bitdefender-logo.jpg?v=1"
        },
        {
            id: 3,
            title: "IP Infusion",
            image: "https://espalobi.sirv.com/ip00-featured-ipi-logo.jpg"
        },
        {
            id: 5,
            title: "Palo Alto",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB1SL4qd3Kueo9E8pNu_kzSPNF0Hg5y-9cQ&s"
        },
        {
            id: 6,
            title: "Brandefense",
            image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/089767d4-7271-44ce-82e4-8f1170bdd2a8.webp"
        },
        {
            id: 7,
            title: "AWS",
            image: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-16">
              

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center h-24"
                        >
                            <img 
                                src={partner.image} 
                                alt={partner.title}
                                className="max-h-full w-auto object-contain transition-transform duration-300" 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partnership;
