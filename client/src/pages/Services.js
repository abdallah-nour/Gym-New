import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import services1 from '../images/services-1.jpg';
import services2 from '../images/services-2.jpg';
import services3 from '../images/services-3.jpg';
import './main.css';

const Services = () => {
    return (
        <>
            <Navbar />
            <section className='container services my-5'>
                <h2 className='display-5 title text-center py-4'>Servicios</h2>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className='col'>
                        <div className='card border-0'>
                            <div className='overflow-hidden'>
                                <img src={services1} className='card-img-top' alt='Card Services' />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title title'>Entrenamiento inteligente</h5>
                                <p className='card-text'>Asesoria personalizada en tu rutina.</p>
                                <Button title='Más información' />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border-0'>
                            <div className='overflow-hidden'>
                                <img src={services2} className='card-img-top' alt='Card Services' />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title title'>Zona de mancuernas</h5>
                                <p className='card-text'>Espacio con gran cantidad de mancuernas.</p>
                                <Button title='Más información' />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border-0'>
                            <div className='overflow-hidden'>
                                <img src={services3} className='card-img-top' alt='Card Services' />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title title'>Zona de cardio</h5>
                                <p className='card-text'>Espacio con diferentes máquinas para cardio.</p>
                                <Button title='Más información' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services