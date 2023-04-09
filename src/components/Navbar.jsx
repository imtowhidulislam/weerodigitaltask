import React from 'react'
import {Link} from "react-router-dom"

import {GiMagicLamp} from "react-icons/gi"
const Navbar = () => {
  return (
    <div className='bg-gray-400 navContainer py-2 px-8 lg:px-0'>
        <div className='flex items-center justify-between'>
            <div className='text-5xl text-gray-50'>
                <GiMagicLamp />
            </div>
            <nav className="list-none flex items-center nav">
                <li >
                    <Link className='link' to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='link' to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className='link' to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className='link' to="/booking">
                        Booking
                    </Link>
                </li>
                <li>
                    <Link className='link' to="/product">
                        Product
                    </Link>
                </li>
            </nav>
        </div>
    </div>
  )
}

export default Navbar