import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../actions/profile';
import Navbar from '../components/Navbar';
import userp from '../images/user.png';

const Profile = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid text-center mt-5 pt-5 text-white dashboard">
        <div className="container">
          <h2 className='user'>Welcome {user && user.name}</h2>
          <img src={userp} alt="" className="img-fluid" style={{ width: '40%' }} />
          {profile !== null ? (
            <Fragment>
              <h3>Personal Information:</h3>
              <span>Name: {user && user.name}</span><br />
              <span>LastName: {user && user.lastname}</span><br />
              <span>Email: {user && user.email}</span><br />
              <span>Phone: {user && user.phone}</span><br />
              <span>Height: {user && profile.height} cm</span><br />
              <span>Weight: {user && profile.weight} kg</span><br />
              <span>Age: {user && profile.age} years</span>
              <div className='mt-1 mb-2 p-1 pb-2'>
                <Link to='/create-profile' className='btn btn-primary my-1 profile-btn'>
                  Personal Data Form
                </Link>
                {/* <br/><button className='btn btn-danger delete-btn mt-2'>Delete Account <FaTrashAlt className='ps-2 fs-4' /></button> */}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className='mt-1 mb-2 p-1 pb-2'>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to='/create-profile' className='btn btn-primary my-1 profile-btn'>
                  Create Profile
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
