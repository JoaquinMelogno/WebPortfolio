import React from 'react'
import './portfolio.css'
import trading from '../../assets/trading.jpg'
import weather from '../../assets/accweather.png'
import tripadv from '../../assets/tripadv.png'
import snake from '../../assets/snake.png'





const Portfolio = () => {
  const data=[
    {
      id:1,
      image:tripadv,
      title:"TripAdv",
      github:'https://github.com/JoaquinMelogno/Trip_adv',
    },
    {
      id:2,
      image:weather,
      title:"Weather App",
      github:'https://github.com/JoaquinMelogno/ForecastWApi',
    },
    {
      id:3,
      image:snake,
      title:"Snake Game",
      github:'https://github.com/JoaquinMelogno/Js_SnakeGame',
    },
  ]
  return (
    <section id='portfolio'>
      
        <h1>Projects</h1>
      <div className="container portfolio__container">
      {
        data.map(({id,image,github,demo,title})=>{
          return(
            <article key={id} className='portfolio__items'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github}className='btn' target='_blank'>Github</a>
              </div>
  
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio