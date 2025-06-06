import React from 'react';

const ServiceCard2 = ({ number, title, description }) => {
  return (
    <div className="w-80 bg-gray-900 rounded-xl shadow-lg text-white relative pt-10 pb-6 px-5 hover:shadow-xl transition-shadow duration-300">
      
      {/* Number Badge */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-amber-600 h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
        <span>{number}</span>
      </div>

      {/* Title */}
      <div className="text-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mx-auto mt-2 h-1 w-10 bg-red-600 rounded"></div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard2;
