import React, { useState } from 'react';
import { VscSend } from "react-icons/vsc";
import { useSendMessage } from "../../hooks/useSendMessage.js";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessage(formData);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }

    return (
        <>
            <div className='p-6 flex flex-col gap-4 text-left'>
                <div className='w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56681315365!2d77.46578538538758!3d12.954280016479368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721559319539!5m2!1sen!2sin" width="800" height="240" style={{ border: "0px", borderRadius:"5px", width:"100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                        <h1 className='text-3xl text-primary font-thin px-4 mb-4'>Contact Form</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-row justify-around mb-3'>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-primary text-lg w-full max-w-md"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered input-primary text-lg w-full max-w-md"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-row justify-around mb-4'>
                            <textarea className="textarea textarea-primary w-[98%] text-lg" rows={3} placeholder="Enter Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            > </textarea>
                        </div>
                        <div className='w-full text-center'>
                            <button className="btn btn-primary btn-outline btn-wide" role='submit'>
                                <span className='text-lg'>Send</span>
                                <VscSend className='h-5 w-5' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact