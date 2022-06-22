import { FaCheck, FaTimes } from 'react-icons/fa';

const Plans = () => {
    return (
        <section className='container my-5 py-5'>
            <div className='text-center mb-3'>
                <span className='title'>Escoge un plan</span>
                <h3 className='text-white'>Encuentra un plan perfecto</h3>
            </div>
            <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
                <div className='col'>
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'>Plan Basico</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$50.000<small className='text-muted fw-light'>/mes</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Entrenador personal</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Clases por semana</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />cceso al gimnsio</li>
                                <li className='d-flex align-items-center justify-content-center'><FaTimes className='me-1 plans__icon' />Protenia en polvo</li>
                                <li className='d-flex align-items-center justify-content-center'><FaTimes className='me-1 plans__icon' />Sesiones personalizadas</li>
                            </ul>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>Escoger el plan</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'>Plan Premium</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$70.000<small className='text-muted fw-light'>/mes</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Entrenador personal</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Clases por semana</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />cceso al gimnsio</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Protenia en polvo</li>
                                <li className='d-flex align-items-center justify-content-center'><FaTimes className='me-1 plans__icon' />Sesiones personalizadas</li>
                            </ul>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>Escoger el plan</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-header py-3'>
                            <h4 className='my-0 fw-normal'>Plan Definitivo</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title pricing-card-title'>$100.000<small className='text-muted fw-light'>/mes</small></h1>
                            <ul className='list-unstyled mt-3 mb-4'>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Entrenador personal</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Clases por semana</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />cceso al gimnsio</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Protenia en polvo</li>
                                <li className='d-flex align-items-center justify-content-center'><FaCheck className='me-1 plans__icon' />Sesiones personalizadas</li>
                            </ul>
                            <button type='button' className='w-100 btn btn-lg btn-primary'>Escoger el plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans;