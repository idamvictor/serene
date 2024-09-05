import React, {useState} from 'react'

function ToogleButton({ text }) {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
  return (
    <div className='flex w-1/2 mt-24 align-baseline gap-y-96'>
        <div className='w-full'>
            <div className='flex justify-between py-2'>
                <p className='text-serene-ash font-semibold'>{text}</p>
                <button
                    onClick={handleToggle}
                    className={`w-14 h-6 flex items-center  rounded-full p-1 cursor-pointer ${
                        isToggled ? 'bg-serene' : 'bg-gray-300'
                    }`}
                    >
                    <div
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                            isToggled ? 'translate-x-7' : ''
                        }`}
                    ></div>
                </button>
            </div>
            <hr className='mb-2 border-[#272727]' />
        </div>
    </div>
  )
}

export default ToogleButton