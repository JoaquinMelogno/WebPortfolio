import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_crcwtml', 'template_ptgeqzi', form.current, 'J23YRzob_aYfYHIHn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      MySwal.fire({
        title:'correo enviado correctamente',
        icon:'success'
      })
  };
  return (
    <section id='contact'>

        <h1>Contact me</h1>

          <div className="container contact__container">
            <div className="contact__options">
              <article className='contact__option'>
                <HiOutlineMailOpen className='contact__option-icon'/>
                <h4>Email</h4>
                <h4>Joaquinmelogno24@gmail.com</h4>
                <a href="mailto:Joaquinmelogno24@gmail.com" target='_blank'>Send me a message</a>
              </article>
              <article className='contact__option'>
                <ImWhatsapp contact__option-icon/>
                <h4>WhatsApp</h4>
                <h4>+598 92 303 511</h4>
                <a href="https://api.whatsapp.com/send?phone=+59892303511" target='_blank'>Send me a message</a>
              </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Tu Nombre' required />
              <input type="email" name='email' placeholder='Tu Email' required />
              <textarea name="message" rows="7" placeholder='Tu Mensaje' required></textarea>
              <button  type='submit' className='btn btn-primary'>Send me a message</button>
            </form>
          </div>
    </section>
  )
}

export default Contact