import React from 'react'

function Support({ text }) {
  return (
    <div className='flex w-1/2 mt-24 align-baseline gap-y-96'>
        <div className='w-full'>
            <p className='text-serene-ash font-semibold'>{text}</p>
            <hr />
        </div>
    </div>
  )
}

export default Support