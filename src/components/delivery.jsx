import React from 'react'

export const Delivery = () => {
  return (
    <div>
        <div >
        <div className='max-w-[1340px] bg-white py-16 px-6'>
            <h3 className='text-orange-500 font-bold text-2xl text-center capitalize'>
                quick delivery app
            </h3>
        </div>
        <div className='w-full mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
            className='w-[550px] mx-auto my-4'
            alt="" />
            <div className='m-4 flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl'>Limitless Convenience on-demand</h1>
                <p className='py-2'>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil consectetur atque amet, aliquid molestias inventore adipisci, obcaecati nulla excepturi rerum dicta nobis sapiente maxime. Nostrum praesentium totam fugit laborum?</span>
                </p>
                <button className='bg-black text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3 capitalize hover:text-white'>Get Started</button>
            </div>
        </div>
    </div>
    </div>
  )
}
