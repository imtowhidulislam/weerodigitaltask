import React from 'react'
import Electronics from "../assets/electronics.svg";
import Men from "../assets/men.svg";
import WemenShopping from "../assets/wemenShopping.svg";
import WemenThing from "../assets/womenThing.svg";
import {FaTshirt,FaFemale} from "react-icons/fa";
import {GiDiamondRing} from "react-icons/gi"
import {GrPersonalComputer} from "react-icons/gr";
const Collection = () => {
  return (
    <div className="py-20">
        <h2 className='text-6xl font-bold text-center mb-8 capitalize'>Our collections</h2>
        <p className='text-sm font-semibold uppercase mb-10'>check our collection in the product page</p>
        <div className='grid grid-cols-collectionLayout gap-4'>
            <div className='bg-[#afcafc] rounded-md p-4 flex items-center justify-between gap-2'>
                <div className=' text-4xl'>
                    <FaTshirt />
               </div>
                <h2 className='text-base font-bold text-gray-600'>Electronics</h2>
            </div>
            <div className='bg-[#afcafc] rounded-md p-4 flex items-center justify-between gap-2'>
                <div className=' text-4xl'>
                    <GrPersonalComputer />
                </div>
                <h2 className='text-base font-bold text-gray-600'>Men's Clothing</h2>
            </div>
            <div className='bg-[#afcafc] rounded-md p-4 flex items-center justify-between gap-2'>
                <div className=' text-4xl'>
                    <FaFemale />
                </div>
                <h2 className='text-base font-bold text-gray-600'>Women's Clothing</h2>
            </div>
            <div className='bg-[#afcafc] rounded-md p-4 flex items-center justify-between gap-2'>
                <div className=' text-4xl'>
                    <GiDiamondRing />
                </div>
                <h2 className='text-base font-bold text-gray-600'>Jewelery</h2>
            </div>
        </div>
    </div>
  )
}

export default Collection