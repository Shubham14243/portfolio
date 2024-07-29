import React from 'react'
import Avatar from './Avatar'
import Contacts from './Contacts'

const Sidebar = () => {
  return (
    <>
        <div className='flex flex-col bg-base-300 h-[90dvh] rounded-md p-4'>
            <Avatar />
            <span className='divider m-1'></span>
            <Contacts />
        </div>
    </>
  )
}

export default Sidebar