import React from 'react'
import { Group } from '@/assets'

function ChatParticipant() {
  return (
    <>
        <div className='flex gap-6 p-4 justify-between bg-[#272727] '>
            {/* <img src={profilePhoto} alt="" className='w-[48px] h-[48px]' /> */}
            <div>
                <div className='text-white font-medium bg-[#191919] px-10 rounded-md py-2'>
                    <p className='text-xs'>Dr. Mary-Ann Okoli</p>
                    <p>Good Afternoon</p>
                </div>
                <div className='text-white font-medium bg-[#191919] px-2 mt-2 rounded-md py-2'>
                    <p>We will starting this meeting</p>
                </div>
            </div>
            <p className='text-white font-medium'>11:00PM</p>
        </div>
        <div className='flex gap-6 p-4 justify-between bg-[#272727] h-[300px]'>
            <img src={Group} alt="" className='w-[48px] h-[48px]' />
            <div>
                <div className='text-white font-medium bg-[#191919] px-10 rounded-md py-2'>
                    <p className='text-xs'>User_Id2356</p>
                    <p>Good Afternoon</p>
                </div>
            </div>
            <p className='text-white font-medium'>11:00PM</p>
        </div>
    </>
  )
}

export default ChatParticipant