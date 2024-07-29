import React from 'react'
import { useMenuContext } from '../../Context/MenuContext';
import useGetData from '../../hooks/useGetData';

const NavItems = () => {

    const { menuItem } = useMenuContext();
    const { setData } = useGetData();

    const handleMenu = (menuName) => {
        setData(menuName);
    }

    return (
        <>
            <ul className="menu menu-horizontal lg:menu-horizontal bg-base-100 rounded-md gap-3">
                <li><a onClick={() => handleMenu("about")} className={`${menuItem === "about" ? "active" : ""}`}><span className='text-lg'>About</span></a></li>
                <li><a onClick={() => handleMenu("resume")} className={`${menuItem === "resume" ? "active" : ""}`}><span className='text-lg'>Resume</span></a></li>
                <li><a onClick={() => handleMenu("project")} className={`${menuItem === "project" ? "active" : ""}`}><span className='text-lg'>Projects</span></a></li>
                <li><a onClick={() => handleMenu("contact")} className={`${menuItem === "contact" ? "active" : ""}`}><span className='text-lg'>Contacts</span></a></li>
            </ul>
        </>
    )
}

export default NavItems