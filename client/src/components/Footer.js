import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import "./main.css"

const Footer = () => {
    return (
        <footer className="page-footer font-small text-white pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="fs-6">©2022 Gym New. Todos los derechos reservados.</h5>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="fs-6">Enlaces Rapidos</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#home" className="footer-link">Inicio</a>
                            </li>
                            <li>
                                <a href="#about" className="footer-link">Acerca</a>
                            </li>
                            <li>
                                <a href="#services" className="footer-link">Servicios</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer-link">Contacto</a>
                            </li>
                            <li>
                                <a href="/products" className="footer-link">Productos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3 footer-icons">
                        <a href="https://www.facebook.com/Gymnew-114847847775741" rel="noreferrer" target="_blank" className="footer-icon"><FaFacebookSquare /></a>
                        <a href="https://www.instagram.com/gymnew2000/" rel="noreferrer" target="_blank" className="footer-icon"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer