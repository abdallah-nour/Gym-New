import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../actions/profile';
import Navbar from '../components/Navbar';
import userp from '../images/user.jpg';
import './main.css';

const Profile = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <Navbar />
      <div className='container-fluid text-center my-5 py-5'>
        <div className='container'>
          <h2 className='user profile__title'>Bienvenido {user && user.name}</h2>
          <img src={userp} alt='Profile' className='img-fluid rounded-circle' style={{ width: '40%' }} />
          {profile !== null ? (
            <Fragment>
              <div className='my-4 text-white'>
                <h3>Información personal:</h3>
                <span>Nombre: {user && user.name}</span><br />
                <span>Apellido: {user && user.lastname}</span><br />
                <span>Correo: {user && user.email}</span><br />
                <span>Teléfono: {user && user.phone}</span><br />
                <span>Altura: {user && profile.height} cm</span><br />
                <span>Peso: {user && profile.weight} kg</span><br />
                <span>Edad: {user && profile.age} años</span>
                <div className='mt-1 mb-2 p-1 pb-2'>
                  <Link to='/create-profile' className='btn btn-primary my-1'>
                    Datos personales
                  </Link>
                  {/* <br/><button className='btn btn-danger delete-btn mt-2'>Delete Account <FaTrashAlt className='ps-2 fs-4' /></button> */}
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className='mt-1 mb-2 p-1 pb-2'>
                <p>Aún no ha configurado un perfil, agregue información.</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                  Crear Perfil
                </Link>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  )
};



Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
