import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7'>
            <div className='absolute inset-0 opacity-20'>
                <Image
                src={"/img1.jpg"}
                alt={"delicious burger banner"}
                width={1000}
                height={1000}
                className='w-full h-full object-cover'/>

            </div>
            <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-white sm:text-5xl font-bold mb-4'>
                Our Delicious Menu
                </h2>
                <p className='text-white text-lg text-center mb-6 max-w-2xl'>
                Order Now and Savor the Exclusive Burger Deals!
                </p>

                <button 
                 type='button'
                 className="bg-yellow-600 text-white text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-500 transition duration-300">
                    Exciting Deals Launch at 12pm!
                
                 
                </button>

            </div>
        </div>
       
    )
}