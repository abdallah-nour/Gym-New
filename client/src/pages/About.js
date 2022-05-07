import about from "../images/about.png"
import "./main.css"

const About = () => {
    return (
        <section className="container-fluid about text-white py-5" id="about">
            <div className="row">
                <div className="col">
                    <h2 className="display-5 pt-5 text-center">Acerca de Nosotros</h2>
                    <p className="lead m-5">Somos una empresa que busca mejorar la calidad de vida de nuestros clientes, para ello contamos con excelentes profesores y clases dinámicas para ayudarte a conseguir tu mejor condición física. Llena tu vida de energía y motivación. Supera tus límites con programas de entrenamiento diseñados por profesionales, de acuerdo a tus objetivos.</p>
                </div>
                <div className="col pt-3 d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
                    <img src={about} alt="About" className="img-fluid" />
                </div>
            </div>
        </section>
    )
}

export default About