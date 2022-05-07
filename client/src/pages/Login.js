import PropTypes from 'prop-types';
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { login } from '../actions/auth';
import "./main.css";

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/profile" />
    }

    return (
        <section>
            <div className="container w-75 mt-5 rounded shadow">
                <div className="row align-items-stretch">
                    <div className="col bg-white rounded">
                        <div className="text-center pt-3">
                            <Link to="/" className="fs-3 login-logo">
                                Gym New
                            </Link>
                        </div>
                        <h2 className="fs-3 text-center py-5">Iniciar Sesión</h2>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="mb-3 py-4">
                                <label className="form-label fs-5 contact-label">Correo electrónico</label>
                                <input
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-5 contact-label">Contraseña</label>
                                <input
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={password}
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </div>
                            <div className="text-end py-2">
                                <a href="/" className="fs-6 login-forget">Olvidaste la contraseña?</a>
                            </div>
                            <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                                <button type="submit" className="btn btn-primary text-white fs-6 login-btn">Iniciar sesión</button>
                            </div>
                        </form>
                        <div className="text-center d-grid gap-2 col-6 mx-auto py-4">
                            <Link to="/register" className="fs-6 login-register">
                            Crea tu cuenta<FaArrowRight className="ps-2 fs-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="col login-bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded login">

                    </div>
                </div>
            </div>
        </section>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);