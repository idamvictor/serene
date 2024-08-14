import React from 'react'
import AuthFlow from '../AuthFlow'

const Modal = () => {
  return (
    <div className='w-full  max-w-[600px] h-full max-h-[600px] m-auto rounded-2xl bg-[#272727] bg-opacity-70 backdrop-blur-xl'>
        <AuthFlow/>
    </div>
  )
}

export default Modal