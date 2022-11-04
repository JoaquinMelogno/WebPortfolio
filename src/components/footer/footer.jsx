import React from "react";
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineFacebook} from 'react-icons/ai'
import { BsLinkedin } from "react-icons/bs";


const Footer=()=>{
    return (
        <footer>
            <a href="#" className="footer__logo">Joaquin Melogno</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">CV</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/joaquin-melogno-354241218/" target="_blank"><BsLinkedin/></a>
                <a href="https://www.facebook.com/joaquin.melogno/" target='_blank'><AiOutlineFacebook/></a>
            </div>

        </footer>
    )
}
export default Footer