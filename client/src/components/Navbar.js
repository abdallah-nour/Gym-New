import PropTypes from 'prop-types';
import { Fragment } from "react";
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";
import userp from "../images/user.png";
import "./main.css";


const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {

    const authLinks = (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand navbar-logo text-white">
                    Gym New
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#about">Acerca</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#services">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#contact">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/products">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/cart"> <FaShoppingCart style={{ fontSize: '1.5rem' }} className="me-2" /> </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link active">
                                <img src={userp} alt="user" style={{ width: '32px' }} /> {user && user.name}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a onClick={logout} className="btn btn-primary btn-logout" href="/login">
                                Logout<FaSignOutAlt className="ps-2 fs-4" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    const guestLinks = (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand navbar-logo text-white">
                    Gym New
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#about">Acerca</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#services">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#contact">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/products">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/cart"> <FaShoppingCart style={{ fontSize: '1.5rem' }} className="me-2" /> </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="btn btn-primary btn-login">
                                Acceder<FaSignInAlt className="ps-2 fs-4" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );

    return (
        <div>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </div>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);