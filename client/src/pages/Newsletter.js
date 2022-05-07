import "./main.css";

const Newsletter = () => {
    return (
        <section className="container pb-5 newsletter">
            <div className="containaer-fluid rounded py-5 bg-white shadow">
                <div>
                    <h2 className="text-center fs-4">Suscríbete para recibir nuestras promociones</h2>
                    <form>
                        <div className="d-flex align-items-center justify-content-center">
                            <input type="email" required className="form-control mt-3 newsletter-input" placeholder="Ingresa tu correo electrónico" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="btn btn-primary mt-4 btn-lg fs-6 newsletter-btn">Suscríbete</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter