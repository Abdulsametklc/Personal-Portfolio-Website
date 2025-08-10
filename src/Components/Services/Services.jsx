import React from 'react'
import './Services.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <div id = 'services' className='services'>
            <div className="services-title">
            <h1>Çalışmalarım</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((services,index)=>{
                    return <div key={index} className='services-format' onClick={() => window.open(services.s_link, "_blank")} style={{ cursor: "pointer" }}>
                        <h3>{services.s_no}</h3>
                        <h2>{services.s_name}</h2>
                        <p>{services.s_desc}</p>
                        <div className = 'services-readmore'>
                            <p>Daha Fazla</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
            <div className="services-showmore" onClick={() => window.open("https://github.com/Abdulsametklc", "_blank")} >
                            <p>Daha Fazla </p>
                            <img src={arrow_icon} alt=""/>
                        </div>
        </div>
    )
}

export default Services