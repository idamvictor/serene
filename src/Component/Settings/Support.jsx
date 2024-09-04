import { angleRight } from '@/assets'
import React from 'react'

function Support({ text }) {
  return (
    <div className='flex w-1/2 mt-24 items-center gap-y-72'>
        <div className='w-full'>
            <p className='text-serene-ash font-semibold'>{text}</p>
            <hr className='mb-2 border-[#272727] mt-2' />
        </div>
        <div className=''>
          <img src={angleRight} alt="" className='' />
        </div>
        
    </div>
  )
}

export default Support