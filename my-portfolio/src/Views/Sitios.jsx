import React from 'react'
import { Link } from 'react-router-dom'
import bg from "/src/assets/baddog/site-singlepage.jpg"
import bg2 from "/src/assets/baddog/site-multipage.jpg"
import workSlide from "/src/assets/baddog/work-slide-1.jpg"
import workSlide2 from "/src/assets/baddog/work-slide-2.jpg"
import workSlide3 from "/src/assets/baddog/work-slide-3.jpg"
import workSlide4 from "/src/assets/baddog/work-slide-4.jpg"
import workSlide5 from "/src/assets/baddog/work-slide-5.png"
import workSlide6 from "/src/assets/baddog/work-slide-6.png"



function Sitios() {

  //const bg = "https://i.ibb.co/T06MhJV/site-singlepage.jpg"
  //const bg2 = "https://i.ibb.co/bgDGwSB/site-multipage.jpg"

  return (
    <main className='pt-5 bg-color'>
      <section id='ultimosproyectos' className='pb-5'>
        <div className='text-center'>
          <h1>Sitios Web 100% Responsivos</h1>
          <p className='fs-5'>Desarrollo sitios de una sóla y de multiples paginas.</p>
        </div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={workSlide} className="d-block w-100" alt="imagen carousel 1" />
            </div>
            <div className="carousel-item">
              <img src={workSlide2} className="d-block w-100" alt="imagen carousel 2" />
            </div>
            <div className="carousel-item">
              <img src={workSlide3} className="d-block w-100" alt="imagen carousel 3" />
            </div>
            <div className="carousel-item">
              <img src={workSlide4} className="d-block w-100" alt="imagen carousel 4" />
            </div>
            <div className="carousel-item">
              <img src={workSlide5} className="d-block w-100" alt="imagen carousel 5" />
            </div>
            <div className="carousel-item">
              <img src={workSlide6} className="d-block w-100" alt="imagen carousel 6" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section id='singlepage' className='min-vh-100 bg-hero-image' style={{ backgroundImage: `url(${bg})` }}>

        <article className='bg-alpha-color min-vh-100 d-flex align-items-center'>
          <div className='container'>
            <article className='col-12 col-lg-6 offset-lg-6'>
              <Link className="btn btn-lg  btn-success text-white mb-5" to="/contacto"><b>Desde $400 <small>USD</small></b></Link>
              <h2>Sitio de una sola página</h2>
              <small>El precio puede ser más bajo (o más alto) dependiendo de los requisitos de su proyecto.</small>
              <p className='my-5 fs-5' >
                Una <b>sola página</b> o <b>página de destino</b> es un sitio web que consta de una página.
                Perfecto para presentar tu empresa, organización, producto, o servicio de una manera hermosa y moderna en Internet.
              </p>
              <Link className='fs-4 fw-bold' to="/contacto">
                Solicite una cotización ahora
                <i className="bi bi-chevron-right"></i>
              </Link>
              <div className='row mt-5'>
                <div className='col'>
                  <p><i className="bi bi-check-lg fs-5"></i> Sitio web de una sola página.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> 100% Responsivo.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> Diseño personalizado.</p>
                </div>
                <div className='col'>
                  <p><i className="bi bi-check-lg fs-5"></i> Correccion de estilo.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> Edicion de imagenes.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> Soporte.</p>

                </div>
              </div>
            </article>
          </div>
        </article>


      </section>
      <section id='multipage' className='min-vh-100 bg-hero-image' style={{ backgroundImage: `url(${bg2})` }} >
      <article className='bg-alpha-color min-vh-100 d-flex align-items-center'>
          <div className='container'>
            <article className='col-12 col-lg-6'>
              <Link className="btn btn-lg  btn-success text-white mb-5" to="/contacto"><b>Desde $1000 <small>USD</small></b></Link>
              <h2>Sitio multipágina</h2>
              <small>El precio puede ser más bajo (o más alto) dependiendo de los requisitos de su proyecto.</small>
              <p className='my-5 fs-5' >
                Un <b>sitio web de varias páginas</b> consta de dos o más páginas. este formato es útil si tiene ciertos elementos que desea mantener separados por páginas y urls diferentes.
              </p>
              <Link className='fs-4 fw-bold' to="/contacto">
                Solicite una cotización ahora
                <i className="bi bi-chevron-right"></i>
              </Link>
              <div className='row mt-5'>
                <div className='col'>
                  <p><i className="bi bi-check-lg fs-5"></i> 2 a 6 páginas.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> 100% Responsivo.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> Diseño personalizado.</p>
                </div>
                <div className='col'>
                  <p><i className="bi bi-check-lg fs-5"></i> Correccion de estilo.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> Edicion de imagenes.</p>
                  <p><i className="bi bi-check-lg fs-5"></i> Soporte.</p>

                </div>
              </div>
            </article>
          </div>
        </article>

      </section>

    </main>)
}

export default Sitios
