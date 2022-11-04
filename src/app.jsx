import React from 'react'
import './index.css'
import Header from './components/header/header'
import About from './components/about/about'
import Nav from './components/nav/nav'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contanct/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>

      <Portfolio/>
      <Contact/>
      <Footer/>
    
    </>
    

  )
}

export default App