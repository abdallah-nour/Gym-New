import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import back from '../images/back.jpg';
import biceps from '../images/biceps.jpg';
import chest from '../images/chest.png';
import legs from '../images/legs.png';
import shoulder from '../images/shoulder.jpg';
import userp from '../images/user.png';
import './main.css';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <>
            <Navbar />
            <section className='container mt-5 mb-5 pt-5'>
                <h2 className='text-white user'><img src={userp} alt='user' style={{ width: '5%' }} />Welcome! {user && user.name}</h2>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-white'>These are your routines: </h3>
                        <div>
                            <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link active' id='pills-monday-tab' data-bs-toggle='pill' data-bs-target='#pills-monday' type='button' role='tab' aria-controls='pills-monday' aria-selected='true'>Monday</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-tuesday-tab' data-bs-toggle='pill' data-bs-target='#pills-tuesday' type='button' role='tab' aria-controls='pills-tuesday' aria-selected='false'>Tuesday</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-wednesday-tab' data-bs-toggle='pill' data-bs-target='#pills-wednesday' type='button' role='tab' aria-controls='pills-wednesday' aria-selected='false'>Wednesday</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-thursday-tab' data-bs-toggle='pill' data-bs-target='#pills-thursday' type='button' role='tab' aria-controls='pills-thursday' aria-selected='false'>Thursday</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-friday-tab' data-bs-toggle='pill' data-bs-target='#pills-friday' type='button' role='tab' aria-controls='pills-friday' aria-selected='false'>Friday</button>
                                </li>
                            </ul>
                            <div className='tab-content' id='pills-tabContent'>
                                <div className='tab-pane fade show active' id='pills-monday' role='tabpanel' aria-labelledby='pills-monday-tab'>
                                    <iframe width='560' height='315' src='https://www.youtube.com/embed/FkSOUITZYkM' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                                </div>
                                <div className='tab-pane fade' id='pills-tuesday' role='tabpanel' aria-labelledby='pills-tuesday-tab'>
                                    <iframe width='560' height='315' src='https://www.youtube.com/embed/DewOrmj8ouo' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                                </div>
                                <div className='tab-pane fade' id='pills-wednesday' role='tabpanel' aria-labelledby='pills-wednesday-tab'>
                                    <iframe width='560' height='315' src='https://www.youtube.com/embed/tT8td1UQ7gs' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                                </div>
                                <div className='tab-pane fade' id='pills-thursday' role='tabpanel' aria-labelledby='pills-thursday-tab'>
                                    <iframe width='560' height='315' src='https://www.youtube.com/embed/hslp24NE7pU' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                                </div>
                                <div className='tab-pane fade' id='pills-friday' role='tabpanel' aria-labelledby='pills-friday-tab'>
                                    <iframe width='560' height='315' src='https://www.youtube.com/embed/GbxBQiOxxpo' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className='text-white'>Exercise guide: </h3>
                        <div>
                            <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link active' id='pills-chest-tab' data-bs-toggle='pill' data-bs-target='#pills-chest' type='button' role='tab' aria-controls='pills-chest' aria-selected='true'>Chest</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-back-tab' data-bs-toggle='pill' data-bs-target='#pills-back' type='button' role='tab' aria-controls='pills-back' aria-selected='false'>Back</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-legs-tab' data-bs-toggle='pill' data-bs-target='#pills-legs' type='button' role='tab' aria-controls='pills-legs' aria-selected='false'>Legs</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-shoulder-tab' data-bs-toggle='pill' data-bs-target='#pills-shoulder' type='button' role='tab' aria-controls='pills-shoulder' aria-selected='false'>Shoulder</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='pills-biceps-tab' data-bs-toggle='pill' data-bs-target='#pills-biceps' type='button' role='tab' aria-controls='pills-biceps' aria-selected='false'>Biceps</button>
                                </li>
                            </ul>
                            <div className='tab-content' id='pills-tabContent'>
                                <div className='tab-pane fade show active' id='pills-chest' role='tabpanel' aria-labelledby='pills-chest-tab'>
                                    <img src={chest} alt='chest' className='img-fluid' />
                                </div>
                                <div className='tab-pane fade' id='pills-back' role='tabpanel' aria-labelledby='pills-back-tab'>
                                    <img src={back} alt='back' className='img-fluid' />
                                </div>
                                <div className='tab-pane fade' id='pills-legs' role='tabpanel' aria-labelledby='pills-legs-tab'>
                                    <img src={legs} alt='legs' className='img-fluid' style={{ width: '82%' }} />
                                </div>
                                <div className='tab-pane fade' id='pills-shoulder' role='tabpanel' aria-labelledby='pills-shoulder-tab'>
                                    <img src={shoulder} alt='shoulder' className='img-fluid' />
                                </div>
                                <div className='tab-pane fade' id='pills-biceps' role='tabpanel' aria-labelledby='pills-biceps-tab'>
                                    <img src={biceps} alt='biceps' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='text-white text-center'>Your measurements:</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <table className='table table-hover text-center'>
                            <thead className='table-primary'>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Muscle</th>
                                    <th scope='col'>Measure(cm)</th>
                                </tr>
                            </thead>
                            <tbody className='table-light'>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Waist</td>
                                    <td>{user && profile.waistdiameter}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>2</th>
                                    <td>Chest</td>
                                    <td>{user && profile.chestdiameter}</td>

                                </tr>
                                <tr>
                                    <th scope='row'>3</th>
                                    <td>Shoulder</td>
                                    <td>{user && profile.shoulderdiameter}</td>

                                </tr>
                                <tr>
                                    <th scope='row'>4</th>
                                    <td>Legs</td>
                                    <td>{user && profile.legsdiameter}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);