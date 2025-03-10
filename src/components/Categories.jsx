import React from 'react';
import { categories } from '../data/data.jsx';

export const Categories = () => {
  return (
    <div>
      <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
          Trending Categories
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
          {categories.map(item => (
            <div key={item.id} className='p-4 flex justify-center hover:scale-105 hover:duration-300 items-start'>
              <img 
                src={item.image} 
                alt={item.name} 
                className='object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl' 
              />
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
};
