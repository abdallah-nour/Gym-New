import { FaArrowRight } from "react-icons/fa";
import service1 from "../images/1.png";
import service2 from "../images/2.png";
import service3 from "../images/3.png";
import "./main.css";

const Services = () => {
    return (
        <section className="container-fluid services px-4 py-5" id="services">
            <h2 className="display-5 text-white text-center py-4">Services</h2>
            <div className="row row-cols-1 row-cols-lg-3 row-colds-md-3 g-3">
                <div className="col text-white">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={service1} alt="" className="img-fluid" />
                            <h5 className="card-title py-2">Personal Trainer</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, impedit.</p>
                            <a href="#" className="btn btn-primary services-btn">More information<FaArrowRight className="ps-2 fs-4" /></a>
                        </div>
                    </div>
                </div>
                <div className="col text-white">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={service2} alt="" className="img-fluid" />
                            <h5 className="card-title py-2">Statistics</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, impedit.</p>
                            <a href="#" className="btn btn-primary services-btn">More information<FaArrowRight className="ps-2 fs-4" /></a>
                        </div>
                    </div>
                </div>
                <div className="col text-white">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={service3} alt="" className="img-fluid" style={{ width: '71%' }} />
                            <h5 className="card-title py-2">Mobile app</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, impedit.</p>
                            <a href="#" className="btn btn-primary services-btn">More information<FaArrowRight className="ps-2 fs-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services