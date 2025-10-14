import React from "react";
import { FiGithub } from "react-icons/fi";

const Project = () => {
  return (
    <>
      <div className="p-10 text-left h-full overflow-x-hidden overflow-y-auto ">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./chatbit.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                ChatBit
              </h2>
              <p className="text-accent font-thin text-xl">
                A Realtime Chatting application built using MERN stack.
                Implemented Socket.io for realtime chat and user online status.
              </p>
              <div className="card-actions justify-around items-center text-error font-thin">
                <div className="badge badge-outline text-xl">MERN</div>
                <div className="badge badge-outline text-xl">Socket.io</div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/ChatBit"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./blissbite.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                BlissBite
              </h2>
              <p className="text-accent font-thin text-xl">
                A Food App built using Flask - Python for Online food ordering
                alongwith admin console. User can Book a Table, Order Food while
                availing discounts and provide feedback. Admin can manage Users,
                Bookings, Menu, Discounts, Orders and Reviews.
              </p>
              <div className="card-actions justify-center items-center text-error font-thin">
                <div className="badge badge-outline text-xl">Flask-Python</div>
                <div className="badge badge-outline text-xl">SQLite</div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/BlissBite_FoodApp"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./diagno.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                Diagno-Health_Prediction_Portal
              </h2>
              <p className="text-accent font-thin text-xl">
                A Health Prediction Portal built using Django framework in
                Python. It includes Disease Prediction, User Management,
                Searching for Doctors by Predicted Disease, Booking
                Appointments, Portal for Doctors to manage booked appointments
                and Patients, Admin Portal for whole system management.
              </p>
              <div className="card-actions justify-around items-center text-error font-thin">
                <div className="badge badge-outline text-xl">Django-Python</div>
                <div className="badge badge-outline text-xl">
                  Supervised M L
                </div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/Diagno-Health_Prediction_Portal"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./textocr.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                Automatic_Form_Filling-OCR
              </h2>
              <p className="text-accent font-thin text-xl">
                A website for automatic form filling using Image input. It takes
                Aadhar Card, Pan Card and Voter Id and automatically fills the
                respective field in a html form.
              </p>
              <div className="card-actions justify-center items-center text-error font-thin">
                <div className="badge badge-outline text-xl">Django-Python</div>
                <div className="badge badge-outline text-xl">OpenCV</div>
                <div className="badge badge-outline text-xl">OCR</div>
                <div className="badge badge-outline text-xl">Deep Learning</div>
                <div className="badge badge-outline text-xl">Regex</div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/Automatic_Form_Filling-OCR"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./invshop.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                Inventory Shop Management
              </h2>
              <p className="text-accent font-thin text-xl">
                A PHP-based Inventory Management Website. The functionalities
                you get are User Management, Customer Management, Supplier
                Management, Product Management, Purchase and Sale Management and
                Billing. Print any Invoice or Export As Excel file.
              </p>
              <div className="card-actions justify-center items-center text-error font-thin">
                <div className="badge badge-outline text-xl">PHP</div>
                <div className="badge badge-outline text-xl">MySQL</div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/Inventory_Shop_Management"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./faceapp.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                Facial_Recognition_and_Mask_Detection
              </h2>
              <p className="text-accent font-thin text-xl">
                A Python-based GUI Desktop Application for Facial Recognition
                Attendance and Facial Mask Detection along with user management.
              </p>
              <div className="card-actions justify-center items-center text-error font-thin">
                <div className="badge badge-outline text-xl">
                  Tkinter-Python
                </div>
                <div className="badge badge-outline text-xl">OpenCV</div>
                <div className="badge badge-outline text-xl">
                  Facial-Recognition
                </div>
                <div className="badge badge-outline text-xl">MySQL</div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/Facial_Recognition_and_Mask_Detection"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./cpu.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                CPU Scheduler
              </h2>
              <p className="text-accent font-thin text-xl">
                A Python-based GUI Desktop Application for Simulating and
                Visualizing CPU Scheduling Algorithms.
              </p>
              <div className="card-actions justify-center items-center text-error font-thin">
                <div className="badge badge-outline text-xl">
                  CustomTkinter-Python
                </div>
                <div className="badge badge-outline text-xl">
                  CPU Scheduling Algo
                </div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/CPU_Scheduler"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 card bg-base-300 shadow-md p-0">
            <figure>
              <img src="./shopmax.png" alt="Project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-thin text-3xl">
                Shopmax_Shopping_Website
              </h2>
              <p className="text-accent font-thin text-xl">
                A PHP-based Online Shopping Website. It includes an Admin Panel
                for User Management, Product Management and Orders Management.
                Upload or Remove products, Cart for Users, etc.
              </p>
              <div className="card-actions justify-center items-center text-error font-thin">
                <div className="badge badge-outline text-xl">PHP</div>
                <div className="badge badge-outline text-xl">MySQL</div>
                <a
                  target="_blank"
                  href="https://github.com/Shubham14243/Shopmax_Shopping_Website"
                >
                  <div className="badge badge-outline text-xl text-info">
                    View on Github!
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
