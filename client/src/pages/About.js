import about from "../images/about.png"
import "./main.css"

const About = () => {
    return (
        <section className="container-fluid about text-white py-5" id="about">
            <div className="row">
                <div className="col">
                    <h2 className="display-5 pt-5 text-center">About</h2>
                    <p className="lead m-5">We are a company that seeks to improve the quality of life of our clients, for this we have excellent teachers and dynamic classes to help you get you in your best physical condition. Fill your life with energy and motivation. Exceed your limits with training programs designed by professionals, according to your goals.</p>
                </div>
                <div className="col pt-3 d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
                    <img src={about} alt="About" className="img-fluid" />
                </div>
            </div>
        </section>
    )
}

export default About