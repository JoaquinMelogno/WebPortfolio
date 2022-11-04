import React from 'react'
import './nav.css'
import{BiHomeSmile} from 'react-icons/bi'
import{SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import{useState} from 'react'

const Nav = () => {
  const [activeNav,setActivenav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActivenav('#')} className={activeNav==='#' ? 'active' :''}><BiHomeSmile/></a>

      <a href="#about" onClick={()=>setActivenav('#about')} className={activeNav==='#about'?'active':''}><SiAboutdotme/></a>

      <a href="#experience" onClick={()=>setActivenav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><MdWorkOutline/></a>
      
      <a href="#contact" onClick={()=>setActivenav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav