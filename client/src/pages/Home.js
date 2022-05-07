import PropTypes from 'prop-types'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import home from "../images/home.png"
import About from "./About"
import Contact from "./Contact"
import Imc from './Imc'
import "./main.css"
import Newsletter from "./Newsletter"
import Services from "./Services"


const Home = ({ isAutheticated }) => {
    if (isAutheticated) {
        return <Redirect to='/dashboard' />
    }
    return (
        <div>
            <Navbar />
            <section className="container-fluid text-white home py-5" id="home">
                <div className="row">
                    <div className="col-sm-6 text-center justify-content-center align-self-center p-5">
                        <h1 className="home-title m-5">WELCOME TO GYMNEW,
                            LIVE THE BEST EXPERIENCE OF
                            TRAINING AND DISCOVER
                            YOUR TRUE POTENTIAL</h1>
                        <div className="icons">
                            <a href="https://www.facebook.com/Gymnew-114847847775741" rel="noreferrer" target="_blank" className="icon"><FaFacebookSquare /></a>
                            <a href="https://www.instagram.com/gymnew2000/" rel="noreferrer" target="_blank" className="icon"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={home} className="img-fluid w-100 d-none d-sm-block home-img pt-5" alt="" />
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Imc />
            <Contact />
            <Newsletter />
            <Footer />
        </div>
    )
};

Home.propTypes = {
    isAutheticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAutheticated: state.auth.isAutheticated
});

export default connect(mapStateToProps)(Home);