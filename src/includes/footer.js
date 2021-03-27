import React from 'react';
import '../style.scss';
import { AiFillGithub , AiFillLinkedin , AiFillTwitterCircle , AiFillFacebook , AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    let date=new Date();

    let Year  = date.getFullYear();

    return(
        <footer>
          <div className="footer_container">
            <div className="social">
                <a href="https://github.com/NithinBalasubramanian" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size="20px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.linkedin.com/in/techidiots-in-2203ba20a/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size="20px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://twitter.com/Techidiots3" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle size="20px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.facebook.com/TechIdiots-101195472074045" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook size="20px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.instagram.com/techidiots/" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size="20px" color="#fff" style={{margin:"10px"}} />
                </a>
            </div>
            <p className="copyCont">2020 - { Year } - &copy; || All Right Reserved  <br/>
            <a href="mailto:info@techidiots.in" target="_blank">info@techidiots.in</a> || TECH IDIOTE || Powered by Pingifinit Software Technology</p>
          </div>
        </footer>
    )
}

export default Footer;
