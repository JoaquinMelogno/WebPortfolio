import React from 'react'
import './experience.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h1>My skills set</h1>

      <div className="container experience__container">
          <div className="experience__frontend">
          <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>HTML</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>CSS</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>Javascript</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>React</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>Tailwind</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>Bootstrap</h4>
              </article>
            </div>
          </div>
          <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>Nodejs</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>PHP</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>MySQL/MongoDb</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>Express/Axios</h4>
              </article>
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>Git/Docker</h4>
              </article>
          </div>
        </div>
        <div className="experience__mobile">
          <h3>Mobile  Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsCheck2Circle className='experience-icon'/>
                <h4>Flutter</h4>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience