import React from 'react'

function Info({desc}) {
  return (
    <div>
        <div className="mt-7">
            <h4 className="text-white text-lg md:text-xl font-semibold">{desc}</h4> 
            <hr />
        </div>
    </div>
  )
}

export default Info