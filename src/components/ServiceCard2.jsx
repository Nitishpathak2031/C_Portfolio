import React from 'react';

const ServiceCard2 = ({ number, title,description}) => {
  return (
    <div className="h-44 w-80 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center justify-center relative text-white">
      {/* Number circle */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-amber-600 h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
        <h1>{number}</h1>
      </div>

      {/* Content */}
      <div className="mt-6 text-center px-4">
        <div className='flex gap-2'>
            <h2 className="text-xl font-semibold ml-24 mb-2">{title}</h2>
            <div className='h-1 translate-x-1/2 w-10 ml-20 mt-4 bg-red-600'></div>
        </div>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard2;


// import React from 'react'

// const ServiceCard2 = () => {
//   return (
//     <div>
//       <div className='h-42 w-62 bg-amber-50 rounded-xl flex justify-center'>
//         <div className='h-9 w-9 bg-amber-900 rounded-4xl flex justify-center items-center'>
//             <h1 className='text-white'>1</h1>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default ServiceCard2

