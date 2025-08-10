import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';
const Footer  = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img  src={logo} alt=""/>
                    <p>Bilgisayar Mühendisliği 4.sınıf Öğrencisi</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt=""/>
                        <input type="email" placeholder='E-posta adresinizi giriniz'/>
                    </div>
                    <div className="footer-subscribe">Abone Ol</div>
                </div>
            </div>
            <hr />
            <div className ="footer-bottom">
            <p className="footer-bottom-left">© 2025 Abdulsamet KILIÇ. Tüm hakları saklıdır.</p>
            <div className="footer-bottom-right">
                <p>Hizmet Süresi</p>
                <p>Gizlilik Politikası</p>
                <p>Benimle iletişime geç</p>
            </div>
        </div>
        </div>
    )
}

export default Footer