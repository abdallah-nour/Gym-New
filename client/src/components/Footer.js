import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './main.css'

const Footer = () => {
    return (
        <footer className='footer font-small text-white pt-4'>
            <div className='container-fluid text-center text-md-left'>
                <div className='row'>
                    <div className='col-md-6 mt-md-0 mt-3'>
                        <h5 className='fs-6'>©2022 Gym New. Todos los derechos reservados.</h5>
                    </div>
                    <div className='col-md-3 mb-md-0 mb-3'>
                        <h5 className='fs-6'>Enlaces Rapidos</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/' className='footer-link'>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className='footer-link'>
                                    Acerca
                                </Link>
                            </li>
                            <li>
                                <Link to='/services' className='footer-link'>
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className='footer-link'>
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link to='/products' className='footer-link'>
                                    Productos
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3 mb-md-0 mb-3 footer__icons'>
                        <a href='https://www.facebook.com/Gymnew-114847847775741' rel='noreferrer' target='_blank' className='footer__icon'>
                            <FaFacebookSquare />
                        </a>
                        <a href='https://www.instagram.com/gymnew2000/' rel='noreferrer' target='_blank' className='footer__icon'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer