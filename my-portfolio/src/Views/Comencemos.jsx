import React from 'react'

function Comencemos() {
  return (
    <main className='pt-5 bg-color'>
      <div className="container">
      <article className='col-12 text-center '>
            <h1>Comencemos tu nuevo proyecto</h1>
            <p className='fs-5'>Me encanta la colaboración mutua entre <b>profesional-cliente</b>, prefiero la frase:</p>
            <p className='fs-2'><b><i>"Trabajo contigo"</i></b></p>
            <p className='fs-5'>En vez de: <b>Trabajo para ti</b></p>
            <p className='text-start'>Me gusta tener contacto directo con el cliente, lo que permite una comunicación clara y
              actualizaciones periódicas del proyecto, haciendo todo lo posible para no causar demoras. Intento definir las
              características y experiencias más adecuadas que brinden la máxima satisfacción.</p>
            <p className='text-start'>Me parece importante ofrecer a mis clientes una comprensión clara de lo que pueden y
              deben esperar de mí. Si trabajamos juntos en su sitio web, el proceso será como se describe a continuación:</p>
          </article>
        <section className='row align-items-center'>
        <article className='col-12 col-lg-6 text-lg-end '>
            <h2>Paso 1</h2>
            <h3>Concepto y Presupuesto</h3>
            <p>Discutimos las primeras ideas durante una breve reunión en sitio, por correo electrónico o video llamada. Siguiendo las ideas
            iniciales, te presentaré un presupuesto oficial para el proyecto.</p>
          </article>
          <article className='col-12 col-lg-6'>
            <img src="./src/assets/baddog/workflow-step-1.png" alt="Paso 1: Concepto y presupuesto" />
          </article>
        </section>
        <section className='row align-items-center'>
        <article className='col-12 col-lg-6 order-lg-1'>
            <h2>Paso 2</h2>
            <h3>Propuesta de Diseño</h3>
            <p>Una vez que se firme y/o acepte la cotización, recibirás la primera factura (50% del monto total acordado).
               Después del pago iniciaré el proyecto. Estudiaré tu empresa, producto o servicio. Para acelerar el proceso, 
               es necesario que me entregues todo el material del proyecto en este momento (Logo, Textos, Fotos, Mapa del sitio, etc.).
                En 7 días te presentaré un diseño profesional y apropiado para tu sitio web.</p>
          </article>
          <article className='col-12 col-lg-6'>
            <img src="./src/assets/baddog/workflow-step-2.png" className='img-fluid' alt="Paso 2: Concepto y presupuesto" />
          </article>
        </section>
        <section className='row align-items-center'>
        <article className='col-12 col-lg-6 text-lg-end'>
            <h2>Paso 3</h2>
            <h3>Retroalimentación</h3>
            <p>Después de la primera presentación del diseño, puedes dar tu opinión y compartir comentarios.
               Tendrás un máximo de 2 rondas de comentarios<sup className='text-first-color fw-bold'>*</sup>. De esta manera no nos detenemos en un círculo sin fin de cambios menores. 
              Esto evita perder tiempo y presupuesto. Es importante compartir buenos comentarios.</p>
          </article>
          <article className='col-12 col-lg-6'>
            <img src="./src/assets/baddog/workflow-step-3.png" alt="Paso 3: Concepto y presupuesto" />
          </article>
        </section>
        <section className='row align-items-center'>
        <article className='col-12 col-lg-6 order-lg-1'>
            <h2>Paso 4</h2>
            <h3>Acabado de Diseño y Contenido</h3>
            <p>Después de la última ronda de comentarios, haré los cambios finales y terminaré el diseño completamente.
               En consulta contigo, también se procesa el contenido final, como textos y fotos.</p>
          </article>
          <article className='col-12 col-lg-6'>
            <img src="./src/assets/baddog/workflow-step-4.png" className='img-fluid' alt="Paso 4: Concepto y presupuesto" />
          </article>
        </section>
        <section className='row align-items-center'>
        <article className='col-12 col-lg-6 text-lg-end'>
            <h2>Paso 5</h2>
            <h3>Fin del Proyecto</h3>
            <p>Dependiendo de la complejidad del proyecto, se terminará de 2 a 8 semanas.
               Una vez finalizado, recibirás la factura final (a menos que se acuerde de otra manera). 
               Después del pago, te enviaré una copia de todos los archivos originales y pondré en línea tu sitio.
                Después de esta etapa, los cambios menores y los errores se procesarán de forma gratuita.
                 Los cambios mayores tendrán costos adicionales<sup className='text-first-color fw-bold'>*</sup>.</p>
          </article>
          <article className='col-12 col-lg-6'>
            <img src="./src/assets/baddog/workflow-step-5.png" alt="Paso 5: Concepto y presupuesto" />
          </article>
        </section>
          <article>
            <p className='text-center'>
              <small><sup className='text-first-color fw-bold'>*</sup> Todo cambio adicional generará cargos extras. Tarifa por hora: <b>150usd + impuestos.</b></small></p>
          </article>
        
      </div>
    </main>)
}

export default Comencemos