import React from 'react'
import { Mic,  video } from '@/assets'

function ChatParticipats({img, callerName}) {
  return (
    <div className='m-6 p-2 bg-[#191919] flex justify-between rounded-[20px]'>
        <img src={img} className='w-[48px] h-[48px]' alt="" />
        <p className='font-medium pt-4 text-white'>{callerName}</p>
        <div className='flex gap-2 mx-10'>
            <img src={Mic} alt="" />
            <img src={video} alt="" />
        </div>
    </div>
  )
}

export default ChatParticipats