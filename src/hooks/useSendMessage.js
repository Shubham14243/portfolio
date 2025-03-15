import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const useSendMessage = () => {

    const [loading, setLoading] = useState(false);
    const mailKey = process.env.REACT_APP_API_KEY;
    const host = process.env.REACT_APP_HOST;

    const sendMail = async (recipient, template, params) => {

        const res = await fetch(`${host}/api/mail/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                "mailkey": mailKey,
                "template_id": template,
                "recipient": recipient,
                "params": params
            })
        });

        const data = await res.json();

        return data;

    }

    const sendMessage = async ({ name, email, message }) => {

        setLoading(true);

        try {

            const success = validateData({ name, email, message });

            if (!success) {
                return;
            }

            const emailData = await sendMail([email, process.env.REACT_APP_SELF_EMAIL], "2", { name, email, message });
            console.log(emailData);

            if (emailData.status != "success") {
                toast.error(emailData.message);
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