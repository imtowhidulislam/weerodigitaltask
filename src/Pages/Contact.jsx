import React, { useEffect, useState } from 'react'
import { GiMagicLamp } from 'react-icons/gi';

const Contact = () => {
  const [formData ,setFormData] = useState({personName:"",personPhone: "", personEmail:"",personOccupation: ""});
  const [person, setPerson] = useState([]);
  
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.personName && formData.personPhone && formData.personEmail && 
      formData.personOccupation){
      const personId = new Date().getTime().toString();

      const newPerson = {...formData, personId};
      setPerson([...person, newPerson]);
      setFormData({
        personName:"",
        personPhone:"",
        personEmail: "",
        personOccupation:""
      })
    }
  }

  useEffect(() => {
    console.log(person);
  },[person])


    return (
    <div className='contact px-2 md:px-16 py-24' >
      <div>
      </div>
      <div className='container flex items-center justify-center '>

      <form onSubmit={handleSubmit} className='w-full max-w-lg px-4 rounded-md overflow-hidden py-8 border border-gray-500 bg-[#36353083] backdrop-filter backdrop-blur-md'>
          <div className='flex items-center justify-center text-6xl text-cyan-700 mb-8'>
            <GiMagicLamp />
          </div>
          <div className='w-full flex items-center justify-center gap-4'>
            <label className='lableWidth text-gray-100 font-bold' htmlFor="Name : ">Name</label>
            <input type="text" name='personName' onChange={handleChange} value={formData.personName} className='form w-full placeholder:capitalize pl-4' placeholder='enter your name' />
          </div>
          <div className='w-full flex items-center justify-center gap-4'>
            <label className='lableWidth text-gray-100 font-bold' htmlFor="Phone : ">Phone</label>
            <input type="text" name='personPhone' onChange={handleChange} value={formData.personPhone} className='form w-full placeholder:capitalize pl-4' placeholder='enter your phone' />
          </div>
          <div className='w-full flex items-center justify-center gap-4'>
            <label className='lableWidth text-gray-100 font-bold' htmlFor="Email : ">Email</label>
            <input type="text" name='personEmail' onChange={handleChange} value={formData.personEmail} className='form w-full placeholder:capitalize pl-4' placeholder='enter your email' />
          </div>
          <div className='w-full flex items-center justify-center gap-4'>
            <label className='lableWidth text-gray-100 font-bold' htmlFor="Occupation: ">Occupation</label>
            <input type="text" name='personOccupation' onChange={handleChange} value={formData.personOccupation} className='form w-full placeholder:capitalize pl-4' placeholder='enter your Occupation' />
          </div>
          <div className='mt-12 w-full '>
            <button type='submit' onClick={handleSubmit} className='rounded-md capitalize w-full font-bold text-base bg-cyan-700 text-gray-100 hover:bg-cyan-300 hover:text-gray-700 transition-all duration-200 ease-out cursor-pointer py-4 px-8'>submit</button>
          </div>
      </form>
      </div>
    </div>
  )
}

export default Contact