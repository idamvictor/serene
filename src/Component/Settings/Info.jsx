import React from 'react'

function Info({desc, center}) {
  return (
    <div>
        <div className="mt-7">
            <h4 className={`text-white text-lg md:text-xl font-semibold mb-3 ${center}`}>{desc}</h4> 
            <hr className='mb-2 border-[#272727]' />
        </div>
    </div>
  )
}

export default Info