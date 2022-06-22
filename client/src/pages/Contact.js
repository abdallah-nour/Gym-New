import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './main.css';

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
        toast.success('Mensaje Enviado',
            {
                position: 'top-center',
                duration: 2000,
                style: {
                    borderRadius: '20px',
                    background: '#f17f5c',
                    border: '1px solid #f17f5c',
                    padding: '1rem',
                    color: '#fff',
                },
            }
        );
    };
    return (
        <>
            <Navbar />
            <section className='container-fluid contact my-5'>
                <h2 className='display-5 text-center title py-4'>Contacto</h2>
                <div className='container'>
                    <div className='row text-white'>
                        <div className='col d-flex justify-content-center'>
                            <FaMapMarkerAlt className='contact__icon' />
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <FaEnvelope className='contact__icon' />
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <FaPhoneAlt className='contact__icon' />
                        </div>
                    </div>
                    <div className='row text-white'>
                        <div className='col d-flex justify-content-center'>
                            <p className='fs-6 pt-2'>Calle 12 # 14 - 23</p>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <p className='fs-6 pt-2'>gymnew2021@gmail.com</p>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <p className='fs-6 pt-2'>+57 315 619 29 89</p>
                        </div>
                    </div>
                    <div className='container text-center p-5 contact__form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='mb-3'>
                                <label className='form-label fs-5 contact-label'>Nombre</label>
                                <input type='text' name='user_name' required className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label fs-5 contact-label'>Apellidos</label>
                                <input type='text' name='user_last' required className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label fs-5 contact-label'>Correo electrónico</label>
                                <input type='email' name='user_email' required className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label fs-5 contact-label'>Teléfono</label>
                                <input type='tel' name='user_phone' required className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label fs-5 contact-label'>Mensaje</label>
                                <textarea className='form-control' required name='message' placeholder='Escribe tu mensaje...' rows='3'></textarea>
                            </div>
                            <button type='submit' value='Send' className='btn btn-primary btn-lg'>Enviar Mensaje</button>
                            <Toaster />
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact