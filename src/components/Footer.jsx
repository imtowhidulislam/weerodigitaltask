import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaLinkedin} from "react-icons/fa"
import {GiMagicLamp} from "react-icons/gi"

const Footer = () => {
  return (
    <div className='bg-blue-700 px-4 py-8'>
        <div className='text-6xl flex items-center justify-center mb-10 text-gray-100'>
            <GiMagicLamp />
        </div>
        <div className='grid grid-cols-footerLayout gap-4'>
            <div className='footerStyle'>
                <h2>services</h2>
                <p>branding</p>
                <p>design</p>
                <p>marketing</p>
                <p>advertisement</p>
            </div>
            <div className='footerStyle'>
                <h2>company</h2>
                <p>about us</p>
                <p>contact</p>
                <p>jobs</p>
                <p>press kit</p>
            </div>
            <div className='footerStyle'>
                <h2>address</h2>
                <p>house#2/1, road#2,</p>
                <p>block#c, section#2,</p>
                <p>mirpur,dhaka-1216</p>
                <p>
                    <span>email : </span>weerodigital@gmail.com 
                </p>
                <p>
                    <span>phone : </span>01634546443
                </p>
                <p>Social handls</p>
                <div className='flex text-2xl text-gray-300 gap-2 mt-2'>
                    <FaFacebookSquare />
                    <FaTwitterSquare/>
                    <FaInstagramSquare/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
        <div className='mt-12 capitalize text-gray-300'>
            <p>copyright <span>2023. </span>all rights reserve to weero Digital</p>
        </div>
    </div>
  )
}

export default Footer