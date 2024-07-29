import React from 'react'
import About from '../contents/About'
import Contact from '../contents/Contact'
import Resume from '../contents/Resume'
import Project from '../contents/Project'
import { useMenuContext } from '../../Context/MenuContext'

const Main = () => {

  const { menuItem } = useMenuContext();

  return (
    <>
      <div className='w-full h-[88%] bg-base-100 rounded-md'>
        {menuItem === "about" ? (
          <About />
        ) : null}
        
        {menuItem === "contact" ? (
          <Contact />
        ) : null}
        
        {menuItem === "resume" ? (
          <Resume />
        ) : null }
        
        {menuItem === "project" ? (
          <Project />
        ) : null}
        
      </div>
    </>
  )
}

export default Main