import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, discription, image, link, className, ...props }) => {
  return (
    <div className={`py-8 ${className}`} {...props}>
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[#01241F] mb-4">
              {title}
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              {discription}
            </p>
            <Link 
              to={link}
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card; 