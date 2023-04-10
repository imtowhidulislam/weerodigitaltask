import React from 'react'
import {FaCrown} from "react-icons/fa";
import {BsFillClipboard2CheckFill,BsFillClipboard2MinusFill} from "react-icons/bs"
import {RiChatSmile2Line } from "react-icons/ri";

const Reward = () => {
  return (
    <div>
        <div className="py-20">
            <h2 className='text-6xl font-bold text-center mb-8 capitalize'>brave challenge</h2>
            <p className='text-sm font-semibold uppercase mb-10'>join us and get your rewards!</p>
            <div className='grid grid-cols-collectionLayout gap-4'>
                <div className='bg-[#2222] rounded-md p-4 '>
                    <div className=' text-5xl text-sky-700'>
                        <BsFillClipboard2MinusFill/>
                </div>
                    <h2 className='text-left  mt-4 text-2xl font-bold text-gray-800'>Electronics</h2>
                    <p className='text-sm mt-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam numquam a. Corrupti, nisi veritatis?</p>
                </div>
                <div className='bg-[#2222] rounded-md p-4 '>
                    <div className=' text-5xl text-sky-700'>
                        <BsFillClipboard2CheckFill />
                    </div>
                    <h2 className='text-left  mt-4 text-2xl font-bold text-gray-800'>Men's Clothing</h2>
                    <p className='text-sm mt-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam numquam a. Corrupti, nisi veritatis?</p>
                </div>
                <div className='bg-[#2222] rounded-md p-4 '>
                    <div className=' text-5xl text-sky-700'>
                        <FaCrown />
                    </div>
                    <h2 className='text-left  mt-4 text-2xl font-bold text-gray-800'>Women's Clothing</h2>
                    <p className='text-sm mt-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam numquam a. Corrupti, nisi veritatis?</p>
                </div>
                <div className='bg-[#a14bdfcc] rounded-md p-4 '>
                    <div className=' text-5xl text-sky-700'>
                        <RiChatSmile2Line />
                    </div>
                    <h2 className='text-left  mt-4 text-2xl font-bold text-gray-100'>Jewelery</h2>
                    <div className='flex items-start'>

                    <button className='capitalize text-base font-bold py-2 px-8 rounded-full mt-4 cursor-pointer bg-cyan-100 text-sky-700 hover:bg-sky-700 hover:text-cyan-100 transition-colors duration-200 ease-out'>join now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reward