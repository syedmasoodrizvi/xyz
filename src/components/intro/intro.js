import React from 'react'
import './intro.css';
import bg from '../../assets/image1.jpg'
import btnImg from '../../assets/hireme.png';



const Intro = () => {
    return(
       <section id="intro">
          <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">
                    I'm <span className="introName">Syed Masood Rizvi</span>
                    <br/>Software Engineer & Web Developer
                </span>
          <p className="introPara"> I am a skilled Software Engineer & Front-End Web Developer with experience<br/>
           in creating visually appealing and user friendly websites.</p>
         <a href='Masood CV.pdf'><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>My Resume</button></a>
          </div>
          <img src={bg} alt="Profile" className="bg"/>
       </section>
    )
}

export default Intro;