import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import GitHubIcon from '../../assets/GitHub-icon.png';
import LinkedinIcon from '../../assets/LinkedIn_icon_circle.svg.png'



const Contact = () => {
    return (
      <section id='contactPage'>
        <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactPageDesc'>Please fill out the form to discuss any business oppurtunities.</span>
         <form className='contactForm'>
            <input type="text" className='name' placeholder='Your Name' name='your_name'></input>
            <input type="email" className='email' placeholder='Your Email'name='your_email'></input>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send 'className='submitBtn'>Submit</button>
            <div className='links'>
              <img src={FacebookIcon} alt='Facebook'className='link'></img>
              <img src={InstagramIcon} alt='Instagram'className='link'></img>
              <img src={GitHubIcon} alt='GitHub'className='link1'></img>
              <img src={LinkedinIcon} alt='GitHub'className='link1'></img>
            
              
            </div>
         </form>
         </div>
      </section>
    )
}
export default Contact;