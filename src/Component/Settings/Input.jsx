import React from 'react'


function Input({name, full, placeholder}) {
  return (
    <div className='flex flex-col'>
        <label htmlFor="name" className='text-serene-gray font-medium mb-2'>{name}</label>
        <input type="text" id='name' placeholder={placeholder} className={`outline-none w-1/2 bg-transparent placeholder:text-serene-gray p-3 rounded placeholder:font-medium ${full}`}/>
    </div>
  )
}

export default Input