import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const useSendMessage = () => {

    const [loading, setLoading] = useState(false);

    const sendMessage = ({ name, email, message }) => {

        setLoading(true);

        try {

            const success = validateData({ name, email, message });

            if (!success) {
                return;
            }

            toast.success("Message sent successfully!");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }

    return { loading, sendMessage };

}


function validateData({ name, email, message }) {
    if (!name || !email || !message) {
        toast.error("Kindly fill all the fields!");
        return false;
    }

    if (name.length < 3) {
        toast.error("Enter a valid Name!");
        return false;
    }

    if (message.length < 3) {
        toast.error("Enter a valid Message!");
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        toast.error("Please enter a valid email!");
        return false;
    }

    return true;
}

export default useSendMessage;