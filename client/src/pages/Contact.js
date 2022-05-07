import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import "./main.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uvbhnmn', 'template_fj4zrg2', form.current, 'user_LXg6NU2Wn0FRQEtu3gdEQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        toast.success('Message Sent!',
            {
                position: 'top-center',
                duration: 2000,
                style: {
                    borderRadius: '20px',
                    background: '#427AA1',
                    border: '1px solid #427AA1',
                    padding: '1rem',
                    color: '#fff',
                },
            }
        );
    };
    return (
        <section className="container-fluid contact px-4 py-5" id="contact">
            <h2 className="display-5 text-white text-center py-4">Contact</h2>
            <div className="container">
                <div className="row text-white">
                    <div className="col d-flex justify-content-center">
                        <FaMapMarkerAlt className="contact-icon" />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <FaEnvelope className="contact-icon" />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <FaPhoneAlt className="contact-icon" />
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col d-flex justify-content-center">
                        <p className="fs-6 pt-2">Street 12 # 14 - 23</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p className="fs-6 pt-2">gymnew2021@gmail.com</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p className="fs-6 pt-2">+57 315 619 29 89</p>
                    </div>
                </div>
                <div className="container rounded-1 text-center p-5 contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Name</label>
                            <input type="text" name="user_name" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Last Name</label>
                            <input type="text" name="user_last" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Email</label>
                            <input type="email" name="user_email" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Phone</label>
                            <input type="tel" name="user_phone" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5 contact-label">Message</label>
                            <textarea className="form-control" required name="message" placeholder="Write your message..." rows="3"></textarea>
                        </div>
                        <button type="submit" value="Send" className="btn btn-primary btn-lg fs-6 contact-btn">Send Message<FaPaperPlane className="ps-2 fs-4" /></button>
                        <Toaster />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact