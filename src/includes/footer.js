import React from 'react';
import '../style.scss';

const Footer = () => {
    let date=new Date();

    let Year  = date.getFullYear();

    return(
        <footer>
          <div className="footer_container">
            <p className="copyCont">2020 - { Year } - &copy; || All Right Reserved  <br/>
            <a href="mailto:info@techidiots.in" target="_blank">info@techidiots.in</a> || TECH IDIOTE || Powered by Pingifinit Software Technology</p>
          </div>
        </footer>
    )
}

export default Footer;
