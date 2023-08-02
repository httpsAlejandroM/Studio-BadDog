import React from 'react'
import imageAbout from "/src/assets/baddog/about-1.png"
import imageAbout2 from "/src/assets/baddog/about-2.png"
import imageAbout3 from "/src/assets/baddog/about-3.png"
import imageAbout4 from "/src/assets/baddog/about-4.png"

function Contacto() {
  return (
    <main className='py-5 bg-color'>
      <div className="container mb-5">
        <section className='row'>
          <article className='col-12 text-center'>
            <h1>¿Interesado?</h1>
            <p className='fs-5 '>¡Enviame tus comentarios!</p>
            <p className='fs-5'>Para más informacion, puedes contactarme en <a href="mailto:ale_m@outlook.com">ale_m@outlook.com</a>.</p>
          </article>
          <article className='col-12 col-lg-6 order-lg-1'>
            <form action="https://formsubmit.co/ale_m@outlook.com" method="POST">
              <div className="mb-3">
                <label className='form-label' htmlFor="name">Nombre</label>
                <input className='form-control' placeholder='Ingresa tu nombre' id='name' name='name' type="text" required />
                </div>
              <div className="mb-3">
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-control' placeholder='Ingresa tu E-mail' id='email' name='email' type="text" required />
              </div>
              <div className="mb-3">
                <label className='form-label' htmlFor="coments">Comentarios</label>
                <textarea className='form-control' rows={5} placeholder='Ingresa tu comentario' id='comments' name='comments' required></textarea>
              </div>
              <div className="mb-3">
              <input className='btn btn-lg btn-success' type="submit" />
              <input type="hidden" name="_next" value="http://127.0.0.1:5173/gracias"></input>
              <input type="hidden" name="_subject" value="Comentario de la pag studio bad dog"></input>
              </div>

            </form>
          </article>
          <article className='col-12 col-lg-6'>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167136476357!2d-58.38157037553769!3d-34.603738871083266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1689443847968!5m2!1ses!2sar" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </article>
        </section>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageAbout} className="d-block w-100" alt="About 1" />

          </div>
          <div className="carousel-item">
            <img src={imageAbout2} className="d-block w-100" alt="About 2" />
          </div>
          <div className="carousel-item">
            <img src={imageAbout3} className="d-block w-100" alt="About 3" />
          </div>
          <div className="carousel-item">
            <img src={imageAbout4} className="d-block w-100" alt="About 4" />
          </div>
          <div className="carousel-caption bg-second-alpha-color z-1 d-md-block">
            <article>
              <aside >
                <p className='fs-4'><b>Alejandro Medina</b>,</p>
                <p className='fs-5 d-none d-sm-block'>Desarrollador Web.</p>
              </aside>
              <aside className='d-none d-md-block'>
                <p>
                  Comencé a crear sitios y aplicaciones web en <b>2023</b>.
                </p>
                <p>
                  Valoro mucho el concepto de <em>"<b>menos es más</b>"</em>.
                </p>
                <p>Trabajo de forma remota e independiente.</p>
              </aside>
            </article>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  )
}

export default Contacto
