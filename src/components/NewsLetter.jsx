import React from 'react'


export const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24162b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className="lg:col-span-2 my-4">
                <h1>Need advice on how to improve your flow?</h1>
                <p>Sign up to join our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="text" 
                        placeholder='email' 
                        className='w-full h-[48px] p-2 bg-slate-300 rounded-md'/>
                    <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none'>Notify Me</button>
                </div>
                <p>We are concerned about security of your data, Read(""). 
                    <span className='text-[#00df9a]'>Privacy Policy</span>
                </p>
                <hr className='my-8 bg-gray-700 border-1' />
            </div>
        </div>

    </div>
  )
}
