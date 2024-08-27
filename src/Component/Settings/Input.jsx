import React from 'react'


function Input({name}) {
  return (
    <div className='flex flex-col'>
        <label htmlFor="name" className='text-serene-gray font-bold mb-2'>{name}</label>
        <input type="text" id='name' placeholder='JELLYBEAN' className='w-1/2 focus:outline-none bg-transparent placeholder:text-serene-gray p-3 rounded placeholder:font-bold'/>
    </div>
  )
}

export default Input