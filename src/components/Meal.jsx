import React, { useState } from 'react';
import { topPicks } from '../data/data.jsx';
import { FaArrowRight }  from 'react-icons/fa'

export const Meal = () => {
  const [foods, setFoods] = useState(topPicks);

  const filterCat = (category) => {
    setFoods(category === 'All' ? topPicks : topPicks.filter(item => item.category === category));
  };

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2 capitalize'>Our Meal</h1>
      <div className='flex justify-center md:justify-center my-2'>
        <button 
          onClick={() => filterCat('All')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          All
        </button>
        <button 
          onClick={() => filterCat('Italian')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Italian
        </button>
        <button 
          onClick={() => filterCat('Korean')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Korean
        </button>
        <button 
          onClick={() => filterCat('Fast Food')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Fast Food
        </button>
        <button 
          onClick={() => filterCat('Asian')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Asian
        </button>
        <button 
          onClick={() => filterCat('Seafood')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Seafood
        </button>
        <button 
          onClick={() => filterCat('Breakfast')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Breakfast
        </button>
        <button 
          onClick={() => filterCat('Vegetarian')}
          className='m-1 border-orange-700 px-3 py-2 rounded-full text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Vegetarian
        </button>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {foods.map(item => (
          <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <img src={item.img} alt={item.title} className='w-full h-[200px] object-cover rounded-lg' />
            <div className='flex justify-between py-2 px-4'>
                <p className='bg-orange-700 h-18 w-18 -mt-10 rounded-full
                text-white  py-4 px-2 border-8 border-white'>{item.price}</p>
            </div>
            <div className='pl-2 py-4' >
                <span className='items-center text-indigo-600 capitalize'>View More</span>
                <FaArrowRight size={25} className='w-5 ml-2 inline'></FaArrowRight>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};
