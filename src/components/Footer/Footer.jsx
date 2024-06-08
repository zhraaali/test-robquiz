import React from 'react'
import facebook from './../../assets/facebook-lite-icon.jpg'
import instaicon from './../../assets/images/Instagram-Logo.wine.svg'
import whatsapp from './../../assets/images/tiktok3.png'
import youtube from './../../assets/images/YouTube-Icon-Full-Color-Logo.wine.svg'
import email from './../../assets/images/email.png'
import './Footer.css'
const Footer = () => {
    
  return (
    <div className='footer-section'>
        <div className='footer'>
        <div className='footerone'>
        <h3>تواصل معنا </h3>
        {/* <p>للمزيد حول مواقعنا</p> */}
            <div className='footer-icons'>
                <a href="https://www.facebook.com/share/8YVsXymp8FzXMCFq/?mibextid=LQQJ4d" target="_b_blank"><img src={facebook} style={{width:'19px', height:'19px',borderRadius:'5px'}}/></a>
                <a href="http://www.instagram.com/rob.quiz?igsh=Y2R4dXkyaXpkbXJs" target="_b_blank"><img src={instaicon} style={{width:'26px', height:'26px'}}/></a>
                <a href="https://www.tiktok.com/@rob.quiz?_t=8lxIMYQGYD4&_r=1" target="_b_blank"><img src={whatsapp} style={{width:'26px', height:'26px'}}/></a>
                <a href="https://youtube.com/@Rob.Quiz1?si=Tu8pGNqhw0PI98Hk" target="_b_blank"><img src={youtube} style={{width:'26px', height:'26px'}}/></a>
                <a href="https://Rakrouch@gmail.com" target="_b_blank"><img src={email} style={{width:'26px', height:'26px'}}/></a>
            </div>
        </div>
        {/* <div className='footertwo'>
        <h3>Company</h3>
            <p>AboutUs</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Pricing</p>
            
        </div>
        <div className='footerthree'>
            <h3>Destinations</h3>
            <p>Maldives</p>
            <p>Los Angelas</p>
            <p>Las Vegas</p>
            <p>Torronto</p>
        </div> */}
        
    </div>
    
    </div>
  )
}

export default Footer