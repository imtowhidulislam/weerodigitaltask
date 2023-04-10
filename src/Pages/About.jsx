import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className='w-full h-full border-2 border-gray-200 relative'>
        <img className='w-full h-full object-cover block' src="https://unsplash.it/1000/600?image=454" alt="aboutImage" />
        <h2 className='absolute gradientText text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-400 to-green-600 mb-4'>Weero Digital</h2>
      </div>
      <div className='container text-left py-10'>
        <p>Weero Digital is a full-service digital marketing company that focuses on driving results via effective and measurable solutions. We partner with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads. From designing, developing and optimizing websites to increasing sales through tactical digital marketing activities, we work with our clients to raise their brand awareness, generate more sales opportunities and maximize their marketing budget ROI.

Weero Digital
</p>
      </div>
    </div>
  )
}

export default About