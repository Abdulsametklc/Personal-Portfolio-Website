import React from 'react'
import  './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () =>  {
    return (
        <div id = 'work' className='mywork'>
            <div className="mywork-title">
                <h1>Deneyimlerim</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index) => {
                    return <img key= {index} src={work.w_img} alt = "" />
                })}
            </div>
            <div className="mywork-showmore" onClick={() => window.open("https://www.linkedin.com/in/abdulsamet-k%C4%B1l%C4%B1%C3%A7/", "_blank")}>
                <p>Daha Fazla</p>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
    )
}

export default MyWork