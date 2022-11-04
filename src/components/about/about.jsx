import React from 'react'
import './about.css'
import aboutme from '../../assets/aboutme2.png'
import {TbAward} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>

      <h1>About me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutme} alt="" />
          </div>
        </div>

        <div className="about__me-content">
          <div className="aboutcards">
            <div className="aboutcard">
              <TbAward className='card_icon'/>
              <h2>Online Courses</h2>
              <small>Udemy/youtube</small>
            </div>
            <div className="aboutcard">
              <TbAward className='card_icon'/>
              <h2>Advance English B2</h2>
                <small>First Michigan (ECCE)</small>
            </div>
          </div>
          <p className='presentacion'>
          Hi, My name is Joaquin I'm a software engineer student and Full Stack software Developer.
          I've  started my career in development one year ago, working full time for a software factory.
          </p>
          
          <p className='saludo'>
          Kind regards Joaquin Melogno
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About