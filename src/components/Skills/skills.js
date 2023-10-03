import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
    return(
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDesc'>I am a software engineer and front-end web developer with experience in 
        creating visually appealing and user friendly websites. I am proficient in Html, CSS, Javascript, 
        Java (Object Oriented Language), Python Language, Operating System (Windows / Linux) and different 
        databases (My SQL, MongoDB, Php). </span>

        <div className='skillsBars'> 
        <div className='skillsBar'> 
        <img src={UIDesign} alt='UI Design' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>I'm a passionate UI/UX designer dedicated to crafting exceptional digital experiences. I thrive 
                on the challenge of transforming ideas into interactive and visually appealing designs that not
                only meet but exceed user expectations. </p>
        </div>
        </div>

        <div className='skillsBar'> 
        <img src={WebDesign} alt='Web Design' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>Front-End Web Developer</h2>
            <p>I'm a passionate front-end web developer with a passion for crafting immersive digital experiences.
            My skill set includes proficiency in HTML, CSS, JavaScript, and a deep understanding of web 
            accessibility and performance optimization.
            </p>
        </div>
        </div>

        <div className='skillsBar'> 
        <img src={AppDesign} alt='' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>Database Management</h2>
            <p>I'm a passionate database management professional with a passion for optimizing data-driven solutions.
               I excel in My SQL database management, PHP My Admin, MongoDB and ensuring data integrity. 
            </p>
        </div>
        </div>

        </div>
    </section>
)
}

export default Skills