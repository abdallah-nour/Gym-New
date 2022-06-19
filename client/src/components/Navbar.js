import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import userp from '../images/user.jpg';
import Button from './Button';
import './main.css';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {

    const authLinks = (
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand navbar-logo'>
                    Gym New
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse text-center' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active'>
                                Inicio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link active'>
                                Acerca
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-link active'>
                                Servicios
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link active'>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/dashboard' className='nav-link active'>
                                Panel de control
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-link active'>
                                Productos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-link active'>
                                <BsCart2 style={{ fontSize: '1.5rem' }} className='me-2' />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile' className='nav-link active'>
                                <img src={userp} className='rounded-circle' alt='user' style={{ width: '32px' }} /> {user && user.name}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a onClick={logout} className='btn btn-primary' href='/login'>
                                Cerrar Sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    const guestLinks = (
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
            <div className='container'>
                <Link to='/' className='navbar-brand navbar-logo text-white'>
                    Gym New
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse text-center' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active'>
                                Inicio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link active'>
                                Acerca
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-link active'>
                                Servicios
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link active'>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-link active'>
                                Productos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-link active'>
                                <BsCart2 style={{ fontSize: '1.5rem' }} className='me-2' />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login'>
                                <Button title='Iniciar Sesión' />
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