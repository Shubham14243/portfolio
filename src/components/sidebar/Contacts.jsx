import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Contacts = () => {
    return (
        <>
            <div className='h-full flex flex-col justify-evenly'>

                <div className='flex flex-row gap-4 mb-2'>
                    <button className="btn btn-md no-animation">
                        <MdOutlineMail className='w-5 h-5' />
                    </button>
                    <div className='flex flex-col items-start'>
                        <h1>
                            <span className='text-lg'>Email</span>
                        </h1>
                        <a className='text-primary' href="mailto:skgsmasher14243@gmail.com">
                            <span>
                                skgsmasher14243@gmail.com
                            </span>
                        </a>
                    </div>
                </div>

                <div className='flex flex-row gap-4 mb-2'>
                    <button className="btn btn-md no-animation">
                        <IoPhonePortraitOutline className='w-5 h-5' />
                    </button>
                    <div className='flex flex-col items-start'>
                        <h1>
                            <span className='text-lg'>Phone</span>
                        </h1>
                        <a className='text-primary' href="tel:+917870602660">
                            <span>
                                +91 7870602660
                            </span>
                        </a>
                    </div>
                </div>

                <div className='flex flex-row gap-4 mb-2'>
                    <button className="btn btn-md no-animation">
                        <FiGithub className='w-5 h-5' />
                    </button>
                    <div className='flex flex-col items-start'>
                        <h1>
                            <span className='text-lg'>Github</span>
                        </h1>
                        <a className='text-primary' target='_blank' href="https://github.com/shubham14243">
                            <span>
                                github/shubham14243
                            </span>
                        </a>
                    </div>
                </div>

                <div className='flex flex-row gap-4 mb-2'>
                    <button className="btn btn-md no-animation">
                        <CiLinkedin className='w-5 h-5' />
                    </button>
                    <div className='flex flex-col items-start'>
                        <h1>
                            <span className='text-lg'>LinkedIn</span>
                        </h1>
                        <a className='text-primary' target='_blank' href="https://www.linkedin.com/in/shubham-kumar-gupta-447943146/">
                            <span>
                                linkedin/shubham-gupta
                            </span>
                        </a>
                    </div>
                </div>

                <div className='flex flex-row gap-4 mb-2'>
                    <button className="btn btn-md no-animation">
                        <IoCalendarOutline className='w-5 h-5' />
                    </button>
                    <div className='flex flex-col items-start'>
                        <h1>
                            <span className='text-lg'>Birthday</span>
                        </h1>
                        <a className='text-primary' href="#">
                            <span>
                                26 July, 2000
                            </span>
                        </a>
                    </div>
                </div>

                <div className='flex flex-row gap-4 mb-2'>
                    <button className="btn btn-md no-animation">
                        <CiLocationOn className='w-5 h-5' />
                    </button>
                    <div className='flex flex-col items-start'>
                        <h1>
                            <span className='text-lg'>Address</span>
                        </h1>
                        <a className='text-primary' href="#">
                            <span>
                                Bokaro, Jharkhand - 829121
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacts