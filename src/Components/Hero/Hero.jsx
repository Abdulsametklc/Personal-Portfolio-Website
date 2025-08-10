import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
    <div id='home' className ="hero">
        <img src = {profile_img} alt=""/>
        <h1><span>Ben Abdulsamet KILIÇ,</span> veri bilimi ve derin öğrenme alanında kendimi geliştiriyorum.</h1>
        <p>6 ay QNB iştiraki IBTech firmasının DW Data Insights ekibinde stajyer olarak yer aldım. Baykar yürütücülüğünde gerçekleşen 2024 Teknofest Savaşan İHA yarışmasında ekip lideri olduğum ATA AIT Simurg takımı ile Türkiye Finalisti olduk.</p>
        <div className="hero-action">
            {/*<div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Benimle iletişime geçin</AnchorLink></div>*/}
            <div className="hero-connect" onClick={() => window.open("https://www.linkedin.com/in/abdulsamet-k%C4%B1l%C4%B1%C3%A7/", "_blank")} >Linkedin</div>
            <div className="hero-resume" onClick={() => window.open("https://github.com/Abdulsametklc", "_blank")} >Github</div>

        </div>
    </div>
    ) 
}

export default Hero