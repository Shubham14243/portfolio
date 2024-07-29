import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const MainArea = () => {
  return (
    <>
        <div className='flex flex-col gap-4 bg-base-300 h-[90dvh] rounded-md p-6'>
            <Navbar />
            <Main />
        </div>
    </>
  )
}

export default MainArea