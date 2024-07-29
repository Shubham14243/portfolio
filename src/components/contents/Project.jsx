import React from 'react';
import { FiGithub } from "react-icons/fi";

const Project = () => {
    return (
        <>
            <div className='p-10 text-left h-full overflow-x-hidden overflow-y-auto '>
                <div className='grid grid-cols-12 gap-4'>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./chatbit.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                                ChatBit
                            </h2>
                            <p className='text-accent font-thin'>
                                A Realtime Chatting application built using MERN stack.

                                Implemented Socket.io for realtime chat and user online status.
                            </p>
                            <div className="card-actions justify-around items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">MERN</div>
                                <div className="badge badge-outline text-lg">Socket.io</div>
                                <a target='_blank' href="https://github.com/Shubham14243/ChatBit"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./blissbite.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                                BlissBite
                            </h2>
                            <p className='text-accent font-thin'>
                                A Food App built using Flask - Python for Online food ordering alongwith admin console.

                                User can Book a Table, Order Food while availing discounts and provide feedback. Admin can manage Users, Bookings, Menu, Discounts, Orders and Reviews.
                            </p>
                            <div className="card-actions justify-center items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">Flask-Python</div>
                                <div className="badge badge-outline text-lg">SQLite</div>
                                <a target='_blank' href="https://github.com/Shubham14243/BlissBite_FoodApp"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./diagno.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                                Diagno-Health_Prediction_Portal
                            </h2>
                            <p className='text-accent font-thin'>
                                A Health Prediction Portal built using Django framework in Python. It includes Disease Prediction, User Management, Searching for Doctors by Predicted Disease, Booking Appointments, Portal for Doctors to manage booked appointments and Patients, Admin Portal for whole system management.
                            </p>
                            <div className="card-actions justify-around items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">Django-Python</div>
                                <div className="badge badge-outline text-lg">Supervised M L</div>
                                <a target='_blank' href="https://github.com/Shubham14243/Diagno-Health_Prediction_Portal"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./textocr.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                                Automatic_Form_Filling-OCR
                            </h2>
                            <p className='text-accent font-thin'>
                                A website for automatic form filling using Image input. It takes Aadhar Card, Pan Card and Voter Id and automatically fills the respective field in a html form.
                            </p>
                            <div className="card-actions justify-center items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">Django-Python</div>
                                <div className="badge badge-outline text-lg">OpenCV</div>
                                <div className="badge badge-outline text-lg">OCR</div>
                                <div className="badge badge-outline text-lg">Deep Learning</div>
                                <div className="badge badge-outline text-lg">Regex</div>
                                <a target='_blank' href="https://github.com/Shubham14243/Automatic_Form_Filling-OCR"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./invshop.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                            Inventory Shop Management
                            </h2>
                            <p className='text-accent font-thin'>
                            A PHP-based Inventory Management Website. The functionalities you get are User Management, Customer Management, Supplier Management, Product Management, Purchase and Sale Management and Billing. Print any Invoice or Export As Excel file.
                            </p>
                            <div className="card-actions justify-center items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">PHP</div>
                                <div className="badge badge-outline text-lg">MySQL</div>
                                <a target='_blank' href="https://github.com/Shubham14243/Inventory_Shop_Management"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./faceapp.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                            Facial_Recognition_and_Mask_Detection
                            </h2>
                            <p className='text-accent font-thin'>
                            A Python-based GUI Desktop Application for Facial Recognition Attendance and Facial Mask Detection along with user management.
                            </p>
                            <div className="card-actions justify-center items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">Tkinter-Python</div>
                                <div className="badge badge-outline text-lg">OpenCV</div>
                                <div className="badge badge-outline text-lg">Facial-Recognition</div>
                                <div className="badge badge-outline text-lg">MySQL</div>
                                <a target='_blank' href="https://github.com/Shubham14243/Facial_Recognition_and_Mask_Detection"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./cpu.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                            CPU Scheduler
                            </h2>
                            <p className='text-accent font-thin'>
                            A Python-based GUI Desktop Application for Simulating and Visualizing CPU Scheduling Algorithms.
                            </p>
                            <div className="card-actions justify-center items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">CustomTkinter-Python</div>
                                <div className="badge badge-outline text-lg">CPU Scheduling Algo</div>
                                <a target='_blank' href="https://github.com/Shubham14243/CPU_Scheduler"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 card bg-base-300 shadow-md p-0">
                        <figure>
                            <img
                                src="./shopmax.png"
                                alt="Project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-thin">
                            Shopmax_Shopping_Website
                            </h2>
                            <p className='text-accent font-thin'>
                            A PHP-based Online Shopping Website. It includes an Admin Panel for User Management, Product Management and Orders Management. Upload or Remove products, Cart for Users, etc.
                            </p>
                            <div className="card-actions justify-center items-center text-error font-thin">
                                <div className="badge badge-outline text-lg">PHP</div>
                                <div className="badge badge-outline text-lg">MySQL</div>
                                <a target='_blank' href="https://github.com/Shubham14243/Shopmax_Shopping_Website"><div className="badge badge-outline text-lg text-info">View on Github!</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project