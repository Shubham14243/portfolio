import React from 'react'

const Avatar = () => {
    return (
        <>
            <div className='flex flex-col gap-4 items-center w-full'>
                <div className="avatar">
                    <div className="w-32 rounded bg-primary">
                        <img src="./avatar.png" alt="It's Me!" />
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='mb-2'>
                        <span className='text-4xl text-gray-200 font-thin'>
                            Shubham Kumar Gupta
                        </span>
                    </h1>
                    <kbd className="kbd kbd-sm mb-2"><span className='text-md text-gray-50'>Fullstack Developer</span></kbd>
                </div>
            </div>
        </>
    )
}

export default Avatar