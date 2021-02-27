import React from 'react';
import '../style.scss';

const Footer = () => {
    let date=new Date();

    let Year  = date.getFullYear();

    return(
        <footer>
          <div className="footer_container">
            <p className="copyCont">{ Year } - &copy; || All Right Reserved || TECH IDIOTS</p>
          </div>
        </footer>
    )
}

export default Footer;
