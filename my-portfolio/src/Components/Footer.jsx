import React from 'react'

function Footer() {
    return (
        <footer className='bg-dark p-3'>
            <div className='container text-center'>
            <nav className='d-flex justify-content-evenly fs-3 mb-3'>
                <a href="https://facebook.com" target='_blank'><i className='bi bi-facebook'></i></a>
                <a href="https://twitter.com" target='_blank'><i className='bi bi-twitter'></i></a>
                <a href="https://instagram.com" target='_blank'><i className='bi bi-instagram'></i></a>
                <a href="https://github.com" target='_blank'><i className='bi bi-github'></i></a>
                <a href="https://youtube.com" target='_blank'><i className='bi bi-youtube'></i></a>
                <a href="https://m.me/user" target='_blank'><i className='bi bi-messenger'></i></a>
                <a href="https://api.whatsapp.com/send?phone=54911123456789" target='_blank'><i className='bi bi-whatsapp'></i></a>
            </nav>
            <small className='text-white'>&copy;2023 <a href="https://www.linkedin.com/in/alejandro-medina-b4558419b/">Alejandro medina.</a></small>


            </div>
           
        </footer>
    )
}
 
export default Footer