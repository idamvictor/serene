import React from 'react'
import { profilePhoto, link } from '@/assets';

function Card() {
  return (
    <div className='text-white border border-[#272727] rounded w-full h-full p-10'>
        <div className='flex items-center'>
            <img src={profilePhoto} alt="" className='w-24 h-24'/> 
            <div className='px-5'>
                <h3 className='text-2xl font-medium'>Mary-Ann Okoli</h3>
                <p>Clinical Psychologist</p>
            </div>
        </div>
        <div className='flex mx-10 mt-5'>
        <img src={link} alt="link-icon" className='-mx-8 z-10'/> 
        <button className='bg-[#272727] px-10 font-bold rounded py-2'>cem-jnmt-hsu</button>
        </div>
        <div className='flex justify-between mt-5 mb-2'>
            <h3>12 Aug, 2024-9am</h3>
            <h3>Remind Me</h3>
        </div>
        <hr className='mb-2 border-[#272727]' />
        <div className='flex justify-between mt-5'>
            <button className='bg-serene px-10 rounded py-2 text-[#272727] font-medium'>Reschedule</button>
            <button className='border-2 rounded text-serene font-medium border-serene px-10 py-2'>Cancel</button>
        </div>
    </div>
  )
}

export default Card