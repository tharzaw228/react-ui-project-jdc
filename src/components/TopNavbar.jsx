import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTrack, TbTruckReturn } from 'react-icons/tb'
import { MdFavorite, MdHelp, MdWallet } from 'react-icons/md'
import {} from 'react-icons/fa'

export default function TopNavbar() {
    const [sideNav, setSideNar] = useState(false);
    console.log(sideNav);

  return (
    <nav className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={() => {setSideNar(!sideNav)}} className='cursor-pointer'>
                <AiOutlineMenu size={25} />

            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                <span className='font-bold'>Eats</span>
                </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-orange-700 text-white rounded-full p-2 font-bold'>Free</p>
                <p className='p-2 font-bold'>Delivery</p>

            </div>
        </div>

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input type="text" className='p-2 w-full focus outline-none' placeholder='search meals' />
            
        </div>

        <button className='bg-indigo-700 text-white hidden md:flex items-center p-4 rounded-full'>
            <BsFillCartFill size={20} /> Cart

        </button>
        {
            sideNav ? <div className='bg-gray-400/50 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNar(!sideNav)}></div>
            : ("")
        }
        <div className={sideNav ? 'fixed top-0 left-0 w-[200px] h-screen bg-gray-800 z-10 duration-700':
         'fixed top-0 left-[-100%] w-[300px] h-screen bg-gray-500 z-10 duration-700'}>  
          <h2 className='text-2xl mx-5 mt-4'>Yum <span className='text-orange-600'>Eat</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-50'>
                <li className='text-xl py-4 flex items-center'>
                    <TbTruckReturn size={25} className='bg-black text-blue-500 rounded-full p-1 m-4'/>
                   <p> Delivery</p>
                </li>
                <li className='text-xl py-4 flex items-center'>
                    <BsPerson size={25} className='bg-black text-blue-500 rounded-full p-1 m-4'/>
                   <p> My Account</p>
                </li>
                <li className='text-xl py-4 flex items-center'>
                    <MdFavorite size={25} className='bg-black text-blue-500 rounded-full p-1 m-4'/>
                   <p> My Favourite</p>
                </li>
                <li className='text-xl py-4 flex items-center'>
                    <MdWallet size={25} className='bg-black text-blue-500 rounded-full p-1 m-4'/>
                   <p> My Wallet</p>
                </li>
                <li className='text-xl py-4 flex items-center'>
                    <MdHelp size={25} className='bg-black text-blue-500 rounded-full p-1 m-4'/>
                   <p> Help</p>
                </li>
            </ul>
          </nav>

        </div>
    </nav>
  )
}
