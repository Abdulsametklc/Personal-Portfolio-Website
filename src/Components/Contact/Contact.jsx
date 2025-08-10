import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg" 


const Contact = () => {

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "152a85f4-b428-4fa3-a0c8-4c753917be95");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

    return (
        <div id = 'contact' className='contact'>
            <div className="contact-title">
                <h1>İletişime geçin</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>İletişim</h1>
                    <p>Projelerim ve çalışmalarım için iletişime geçebilirsiniz.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt=""/> <p>abdulsamet.kilic21@ogr.atauni.edu.tr</p>
                        </div>
                        {/*<div className="contact-detail">
                            <img src={call_icon} alt=""/> <p>+905550005500</p>
                        </div>*/}
                        
                        <div className="contact-detail">
                            <img src={location_icon} alt=""/> <p>İstanbul, TÜRKİYE</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor = "">İsim</label>
                    <input type="text" placeholder='İsminizi giriniz' name='name' required/>
                    <label htmlFor = "">E-posta</label>
                    <input type="email" placeholder ='E-posta adresinizi giriniz' name='email' required/>
                    <label htmlFor = "">Mesajınızı ve iletişim bilgilerinizi buraya yazınız.</label>
                    <textarea name="message" rows="8" placeholder='Mesajınızı buraya yazınız.'></textarea>
                    <button type='submit' className="contact-submit">Şimdi Gönder</button>
                </form>
            </div>
        </div>
    )
}

export default Contact