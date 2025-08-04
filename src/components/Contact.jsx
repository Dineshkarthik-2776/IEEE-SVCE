import React from 'react'
import SVCE from '../assets/svce-logo.png'
import LOGO2 from '../assets/logo2.png'
import Insta from '../assets/insta-logo.png'
import Linkedin from '../assets/linkedin.png'
import Mail from '../assets/mail.png'
import './contact.css'

const Contact = () => {
  return (
   <section className="contact">
      <div className="contact-container">
        
          <img src={SVCE} alt="SVCE Logo1" className="logo1" />
          <div className="address">
            <p><strong>Sri Venkateswara College of Engineering</strong></p>
            <p>Post Bag No.1, Pennalur Village</p>
            <p>Chennai - Bengaluru Highways</p>
            <p>Sriperumbudur (off Chennai) Tk. - 602 117</p>
            <p>Tamil Nadu, India</p>
          </div>
        

        
          <img src={LOGO2} alt="IEEE Logo1" className="logo1 ieee" />
          <div className="socials">
            <a href="https://www.instagram.com/ieeesvce" target="_blank" rel="noreferrer"><img src={Insta} alt="" /></a>
            <a href="https://www.linkedin.com/company/ieee-svce/" target="_blank" rel="noreferrer"> <img src={Linkedin} alt="" /> </a>
             <a href="mailto:ieeesvce@svce.ac.in"> <img src={Mail} alt="" style={{width:'2.7rem', marginTop:'0.2rem', marginLeft:'0.5rem'}}/> </a>
          </div>
      
      </div>

      <p className="copyright">© IEEE Student Branch, SVCE</p>
    </section>
  )
}

export default Contact