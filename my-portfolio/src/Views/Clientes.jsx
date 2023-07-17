import React from 'react'

function Clientes() {
  return (
    <main className='pt-5 bg-color'>
      <div className='container'>
        <section className='row g-0'>
          <article className='col-12 text-center'>
            <h1>Clientes & Colaboraciones</h1>
            <p className='fs-5'>Aquí hay una selección de clientes felices y hermosos proyectos.</p>
          </article>
          <article className='col-12'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/ZBGtSQn/clients-1.jpg" className="card-img" alt="Andy Pandharikar" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Andy Pandharikar</h5>
                <p className="card-text"><small>CEO/Co-funder, Commerce AI</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-1" >Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  No estábamos satisfechos con ninguna de nuestras opciones anteriores. Pero Bad Dog tuvo lo que teníamos en mente.
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Commerce AI</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Posicioné una nueva marca comercial (en línea) y diseñé un sitio web adaptado y hecho a medida.
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/KKkTxV8/work-layout-1.jpg" alt="Commerce AI" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='col-12 col-sm-6 col-lg-4'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/wdJFZQS/clients-2.jpg" className="card-img" alt="Zeb Couch" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Zeb Couch</h5>
                <p className="card-text"><small>Dueño de Zeb Couch</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-2">Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  He trabajado con Bad Dog en varios proyectos ahora y seguiré trabajando siempre que pueda.
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Walkers</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      He estado trabajando con Zeb en varios otros proyectos en el último año.
                      Cuando se contactó conmigo para hablar sobre un proyecto que se desarrollaba en
                      torno al diseño de una tienda web personalizada para su padre, inmediatamente me
                      interesé e inspiré. Esto resultó ser un proyecto realmente inspirador y divertido en el que
                      trabajar en conjunto, lo que dio como resultado un sitio web de diseño personalizado y muy
                      creativo con una tienda en línea.
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/2jhNGFP/work-layout-2.jpg" alt="Walkers" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='col-12 col-sm-6 col-lg-4'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/mtYWrYB/clients-3.jpg" className="card-img" alt="Lori Knisely" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Lori Knisely</h5>
                <p className="card-text"><small>Co-dueña & Diseñadora de Hey Textile</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-3">Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  ¡Bad Dog, siempre lo consigue!
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Hey Textile</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Lori es dueña de su negocio junto con su esposo.
                      Resultan ser una de esas empresas con las que me encanta trabajar.
                      Me dan mucha libertad en mi proceso de diseño creativo, pero aún tienen muchas
                      de sus propias ideas que quieren combinar. Este proyecto resultó ser un proyecto
                      super divertido para trabajar juntos. ¡Ambos estamos imaginando una buena relación
                      de negocios para trabajar nuevamente en proyectos futuros!
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/3hZn82h/work-layout-3.jpg" alt="Hey textile" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='col-12 col-sm-6 col-lg-4'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/TqRbkJz/clients-4.jpg" className="card-img" alt="Tom Allan" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Tom Allan</h5>
                <p className="card-text"><small>Co-fundador & Director, Basis Networks</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-4">Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  Definitivamente continuaremos usando los servicios de Bad Dog para nuestros proyectos futuros.
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Basis Networks</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Tom me contactó con la idea de hacer un rediseño completo de su sitio web (obsoleto) y también hacer que responda.
                      Estaba buscando un sitio web de aplicación de estilo moderno y me dio mucha libertad para crear un diseño que tenía en mente.
                      El resultado es un sitio web de aspecto moderno del que ambos estamos orgullosos.
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/0mdYynX/work-layout-4.jpg" alt="Basis networks" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='col-12 col-sm-6 col-lg-4'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/Lr6Pwcy/clients-5.jpg" className="card-img" alt="Jin Choeh" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Jin Choeh</h5>
                <p className="card-text"><small>Co-founder & CEO Swingvy</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-5">Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  Bad Dog estaba más allá de nuestras expectativas.
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Swingvy</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      He estado trabajando con el equipo de Shale Capital Group desde 2014.
                      Hemos trabajado juntos en varios proyectos de sitios web de (re) diseño y (re) marca.
                      Estoy muy contento de que nuestra relación continua demuestre que puedo ofrecer la calidad que requieren en sus proyectos.
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/TW0p5V8/work-layout-5.jpg" alt="Swingvy" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='col-12 col-sm-6 col-lg-4'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/Y7vdPLR/clients-6.jpg" className="card-img" alt="Jennifer Blair" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Jennifer Blair</h5>
                <p className="card-text"><small>CEO Lash Spa Studio</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-6">Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  Hemos encontrado un socio perfecto para nuestras necesidades de diseño y marca.
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Lash Spa Studio</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      He estado trabajando con el equipo de Lash Spa Studio desde 2014.
                      Hemos trabajado juntos en varios proyectos de sitios web de (re) diseño y (re) marca.
                      Estoy muy contento de que nuestra relación continua demuestre que puedo ofrecer la calidad que requieren en sus proyectos.
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/c1Fq37J/work-layout-6.jpg" alt="Lash Spa Studio" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='col-12 col-sm-6 col-lg-4'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/SxTYJmy/clients-7.jpg" className="card-img" alt="Sietse Kingma" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Sietse Kingma</h5>
                <p className="card-text"><small>Co-fundador Bambuu BV</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-7">Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  Bad Dog crea sitios impresionantes, estrategias increíbles y mucho más.
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-7" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Bambuu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      He estado trabajando con Bambuu BV como diseñador gráfico y diseñador web de forma regular desde 2014.
                      Bambuu ha demostrado ser un negocio de inicio muy exitoso en los Países Bajos y estoy muy contento de poder ofrecer la calidad de trabajo que ofrecen.
                      Requieren en sus proyectos.
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/gy4FmVY/work-layout-7.jpg" alt="Bambuu" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='col-12'>
            <div className="card text-bg-dark border-0 rounded-0">
              <img src="https://i.ibb.co/rmDfys8/clients-8.jpg" className="card-img" alt="ASergie Magdalin" />
              <div className="card-img-overlay bg-second-alpha-color d-flex flex-column justify-content-md-center">
                <h5 className="card-title">Sergie Magdalin</h5>
                <p className="card-text"><small>Co-fundador de Webflow</small>
                  <br />
                  <a href="#" className='text-success' data-bs-toggle="modal" data-bs-target="#cliente-8">Ver Proyecto</a>
                </p>
                <blockquote className=' card-text d-none d-md-block'>
                  Bad Dog es una de los mejores empresas con las que he trabajado.
                </blockquote>
              </div>
            </div>
            <div className="modal fade" id="cliente-8" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLabel">Webflow</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Fue justo al comienzo de mi negocio (principios de 2014), cuando el equipo de Webflow me contactó después de haber visto algunos de mis sitios web basados en Webflow.
                      Estaban lanzando un Template Marketplace en ese entonces y me pidieron que fuera parte de él.
                      ¡He estado creando plantillas de flujo web html5 modernas y receptivas para ellos desde entonces!
                    </p>
                    <img className='img-fluid' src="https://i.ibb.co/gy4FmVY/work-layout-7.jpg" alt="Webflow" />
                  </div>
                </div>
              </div>
            </div>
          </article>

        </section>
      </div>
    </main>)
}

export default Clientes