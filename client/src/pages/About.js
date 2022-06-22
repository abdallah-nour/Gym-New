import { FaCheckSquare } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import about from '../images/about.png';
import './main.css';

const About = () => {
    return (
        <>
            <Navbar />
            <section className='about'>
                <div className='container'>
                    <div className='row align-items-center flex-wrap-reverse'>
                        <div className='col-md-6'>
                            <h3 className='display-5 title'>Acerca de Nosotros</h3>
                            <p className='about__description pt-1'>Somos una empresa que busca mejorar la calidad de vida de nuestros clientes, para ello contamos con excelentes profesores y clases dinámicas para ayudarte a conseguir tu mejor condición física. Llena tu vida de energía y motivación. Supera tus límites con programas de entrenamiento diseñados por profesionales, de acuerdo a tus objetivos. Ofrecemos:</p>
                            <ul className='text-white'>
                                <li className='pt-1'> <FaCheckSquare className='me-1 about__icon' />Cómo apoyar su sistema inmunológico.</li>
                                <li className='pt-1'> <FaCheckSquare className='me-1 about__icon' />Una guia de ejercicios.</li>
                                <li className='pt-1'> <FaCheckSquare className='me-1 about__icon' />Bebidas y comidas con gran aporte de proteina.</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <img src={about} className='w-100 mt-5 pt-4' alt='About GymNew' />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;