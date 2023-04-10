import React from 'react'
import ShoppingImage from "../assets/shopping.svg";
import Slider from '../components/Slider';
import Collection from '../components/Collection';
import Reward from '../components/Reward';

const Home = () => {
  return (
    <div>
      <div className='container py-20 px-2 md:px-8'>
        <div className='grid grid-cols-homepageLayoutHero gap-8 place-items-center'>
          <div className='flex items-center justify-center flex-col sm:items-start mb-8  sm:text-left'>
            <h2 className='capitalize text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-purple-400 to-pink-600 mb-4'>Make your shopping easy with our platform.</h2>
            <p className='capitalize text-sm md:text-base lg:text-xl'>bornbrave is fashion brnad that encourage kids to explore their interest in a fun way, this brand want to bring...</p>
            <button className='capitalize text-base  font-bold py-3 px-12 rounded-full cursor-pointer text-gray-100 bg-cyan-400 border-2 border-transparent hover:border-purple-300 transition-all ease-in-out duration-200 mt-8 hover:bg-cyan-600 hover:text-gray-50'>Explore our catalogue</button>
          </div>
          <div><img src={ShoppingImage} alt="" /></div>
        </div>
        <div>
          <Slider />
        </div>
        <div>
          <Collection />
        </div>
        <div>
          <Reward />
        </div>
      </div>
    </div>
  )
}

export default Home