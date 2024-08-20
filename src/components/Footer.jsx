import React from 'react'
import { FaDribbble, FaFacebookSquare, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full  text-3xl font-bold text-orange-500'>Yum Eats</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed id ad 
                   quisquam tempora explicabo unde quas minima voluptate. Sint hic distinctio explicabo blanditiis! 
                   Laudantium reiciendis perspiciatis corrupti eius reprehenderit?</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}></FaFacebookSquare>
                    <FaInstagram size={30}></FaInstagram>
                    <FaTwitter size={30}></FaTwitter>
                    <FaGithub size={30}></FaGithub>
                    <FaDribbble size={30}></FaDribbble>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}
