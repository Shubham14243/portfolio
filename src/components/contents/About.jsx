import React from 'react'

const About = () => {
    return (
        <>
            <div className='p-12 text-left'>
                <p className='text-xl text-gray-400 font-thin mb-2'>
                    Hello! I’m Shubham Kumar Gupta, a fullstack developer skilled in web and desktop application development using the MERN stack, Django, Flask, and Tkinter. My strong foundation in C++, Java, and Python drives my passion for creating innovative solutions and staying current with industry trends.
                </p>
                <p className='text-xl text-gray-400 font-thin mb-8'>
                    In addition to my technical expertise, I excel in communication, teamwork, and problem-solving. My collaborative approach and effective time management ensure projects are completed efficiently and exceed expectations. Whether tackling complex coding challenges or working with diverse teams, I aim to deliver outstanding results.
                </p>

                <div className='w-full'>
                    <h1 className='text-3xl text-primary font-thin mb-6'>What I Do</h1>
                    <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-6'>
                            <div className="card bg-base-200 border-2 border-primary text-gray-200 w-96">
                                <div className="card-body p-4">
                                    <h2 className="card-title font-thin text-2xl">FullStack Web  Developement</h2>
                                    <p className='text-gray-400 text-xl'>I develop fullstack web applications using MERN, Django, and Flask, leveraging my expertise to create robust and innovative solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className="card bg-base-200 border-2 border-primary text-gray-200 w-96">
                                <div className="card-body p-4">
                                    <h2 className="card-title font-thin text-2xl">Desktop Application Developement</h2>
                                    <p className='text-gray-400 text-xl'>I develop desktop applications using Tkinter, leveraging my expertise to create user-friendly and efficient solutionsto meet various needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About