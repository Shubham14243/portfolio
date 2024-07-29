import React from 'react'
import Sidebar from './sidebar/Sidebar'
import MainArea from './main/MainArea'

const Container = () => {
  return (
    <>
        <div className='grid grid-cols-12 gap-4 w-[90%] mt-10'>
            <div className='col-span-3'>
                <Sidebar />
            </div>
            <div className='col-span-9'>
                <MainArea />
            </div>
        </div>
    </>
  )
}

export default Container