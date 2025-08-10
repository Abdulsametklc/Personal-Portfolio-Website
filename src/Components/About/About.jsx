import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id = 'about' className ='about'>
            <div className ="about-title">
                <h1>Hakkımda</h1>
                <img src={theme_pattern} alt = ""/>
            </div>
            <div className="about-sections">
              <div className="about-left">
                <img src={profile_img} alt= ""/>
              </div>
              <div className="about-right">
                <div className="about-para">
                    <p>Atatürk Üniversitesi'nde Bilgisayar Mühendisliği son sınıf öğrencisiyim.</p>
                    <p>Üniversite kariyerim boyunca kurucusu olduğum Yapay Zeka ve Teknoloji Topluğu ile birden fazla eğitim, organizasyon, zirve ve gezilere imza attık. Kurucu lideri olduğum ATA AIT Simurg İHA Takımı ile Savaşan İHA projesinde görev algoritmalarının oluşturulması, görüntü işleme algoritmalarının yazılması ve simülasyon testlerinden sorumluydum. Bu projede Python, OpenCV, Pyzbar, Socket, Gazebo ve YOLO teknolojilerini kullandım. </p>
                    <p>IBTech firmasında Oracle SQL dilinde sorgular yazdım ve bu sorguların optimizasyon çalışmalarında yer aldım. Bankadan talep edilen sonuçların hızlandırılması için Llama 2 modeli ve LangChain kütüphanesi ile otomasyon projesi geliştirdim.</p>
                    <p>Fırçasız Motor şirketi Hekzatech firmasına C# ile masaüstü Elektrikli Motor Sargı Dizilimi Hesaplayıcı uygulaması geliştirdim.</p>
                    <p>Atatürk Üniversitesi Dış İlişkiler Ofisi'nde 2 ay boyunca, WordPress ile geliştirilmiş web site üzerinde yenilikler yaparak siteyi geliştirdim.</p>
                    <p>T3 Vakfı’nda 2024 yılında ve 2025’te aktif olarak Eğitmen - Mentör bursiyeri olarak görev yapıyorum.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Oracle SQL</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>MS SQL</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Django</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>HTML-CSS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>OpenCV</p><hr style={{width:"50%"}} /></div>
                </div>
              </div>
            </div>
            <div className="about-achievements">
              <div className="about-achievement">
                <h1>8 AY</h1>
                <p>ÇALIŞMA DENEYİMİ</p>
              </div>
              <hr />
              <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJE</p>
            </div>
            <hr />
              <div className="about-achievement">
                <h1>3</h1>
                <p>TEKNOFEST PROJESİ</p>
            </div>
        </div>
        </div>
    )
}

export default About