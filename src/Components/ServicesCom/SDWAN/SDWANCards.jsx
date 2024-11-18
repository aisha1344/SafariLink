import React, { memo } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { sdwanFeatures } from '../../../assets/data/sdwanData';

const SDWANCards = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Focus
        </motion.h2>

        <div className="space-y-32">
          {sdwanFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(SDWANCards);
