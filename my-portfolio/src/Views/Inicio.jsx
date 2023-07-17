import React from 'react'
import { Link } from 'react-router-dom'

function Inicio() {
    return (
        <main className='pt-5 bg-gradient-blue-green' >
            <div className='container'>
                <section className='row text-white align-items-lg-center mb-5'>
                    <article className='col-12 col-lg-5'>
                        <h2>¿Necesitas un increible sitio web?</h2>
                        <p className='fs-5'>Un sitio hermoso, moderno, responsivo y personalizado para un compañia, negocio, marca, servicio o producto</p>
                        <a className='btn btn-success fw-bold btn-lg' href="#servicios">¡Sí, empecemos!</a>
                    </article>
                    <article className='col-12 col-lg-7'><img className='img-fluid' src="./src/assets/baddog/header-image.png" alt="necesitas un increible sitio web?" /></article>
                    <article className='col-12 col-lg-5 order-lg-1'>
                        <h2>Sitios web responsivos</h2>
                        <p className='fs-5'>Es importanto proporcionar a tus visitantes una experiencia web óptima en dispositivos móviles. El diseño web responsivo significa que tu sitio se adapta instantáneamente al dispositivo que el visitante utiliza. ¡Mi trabajo es hacer, que la visita de tus usuarios sea la más agradable e intuitiva para ellos!</p>
                    </article>
                    <article className='col-12 col-lg-7'><img className='img-fluid' src="./src/assets/baddog/header-image-2.png" alt="sitios responsivos" /></article>
                </section>
                <section id='servicios' className='row align-items-lg-center min-vh-100'>
                    <article className='col-12 col-md-6 col-xl-3 d-flex'>
                        <div className="card mx-auto mb-3" style={{width: "18rem"}} >
                            <img src="./src/assets/baddog/icon-sites.png" className='card-img-top bg-third-color' alt="nuevo sitio web"/>
                                <div className="card-body">
                                    <h5 className="card-title">Nuevo sitio web</h5>
                                    <p className="card-text">¿Necesitas un (Nuevo) sitio web 100% responsivo?</p>
                                    <a href="#" className='text-third'>Más detalles <i className="bi bi-chevron-right"></i></a>
                                </div>
                        </div>
                    </article>
                    <article className='col-12 col-md-6 col-xl-3 d-flex'>
                    <div className="card mx-auto mb-3" style={{width: "18rem"}} >
                            <img src="./src/assets/baddog/icon-clients.png" className='card-img-top bg-third-color' alt="clientes"/>
                                <div className="card-body">
                                    <h5 className="card-title">Clientes</h5>
                                    <p className="card-text">Clientes felices y proyectos hermosos.</p>
                                    <a href="#" className='text-third'>Más detalles <i className="bi bi-chevron-right"></i></a>
                                </div>
                        </div>
                    </article>
                    <article className='col-12 col-md-6 col-xl-3 d-flex'>
                    <div className="card mx-auto mb-3" style={{width: "18rem"}} >
                            <img src="./src/assets/baddog/icon-workflow.png" className='card-img-top bg-third-color'  alt="flujo de trabajo"/>
                                <div className="card-body">
                                    <h5 className="card-title">Flujo de Trabajo</h5>
                                    <p className="card-text">Escucho tus necesidades. Discutamos tu proyecto.</p>
                                    <a href="#" className='text-third'>Más detalles <i className="bi bi-chevron-right"></i></a>
                                </div>
                        </div>
                    </article>
                    <article className='col-12 col-md-6 col-xl-3 d-flex'>
                    <div className="card mx-auto mb-3" style={{width: "18rem"}} >
                            <img src="./src/assets/baddog/icon-about.png"  className='card-img-top bg-third-color' alt="contacto"/>
                                <div className="card-body">
                                    <h5 className="card-title">¿Interesado?</h5>
                                    <p className="card-text">Comencemos con tu nuevo proyecto</p>
                                    <a href="#" className='text-third'>Más detalles <i className="bi bi-chevron-right"></i></a>
                                </div>
                        </div>
                    </article>

                </section>
            </div>
        </main>

    )
}

export default Inicio