import React , { useRef , useState } from 'react';
import '../style.scss';
import axios from 'axios';
import { AiFillGithub , AiFillLinkedin , AiFillTwitterCircle , AiFillFacebook , AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    let date=new Date();
    
    let [ subscribeStatus , setSubscribeStatus ] = useState(false); 

    let [ emailData , setEmailData ] = useState('');
    
    let email = useRef(null);

    let Year  = date.getFullYear();
    
    const subscribe = () => {

        let emailSubscribe = email.current.value;

        const data = {
            'email' : emailSubscribe,
        };  

        axios.post('http://pingifbulk.techidiots.in/Techidiots/subscribe',data,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then((res) => {
            setEmailData('');
            setSubscribeStatus(true);
        })
        .catch((error) => {
            console.log(error);
        })
        
    }

    const emailHandler = (e) => {
        setEmailData(e.target.value);
    }

    return(
        <footer>
          <div className="footer_container">
            {/* <div className="subscribe">
                <small className={ (subscribeStatus) ? 'subscribedMsg' : 'statusNone '}>Subscribed Successfully</small>
                <div className="subscribeColm">
                    <input type="email" className="subscribeInput" ref={ email } placeholder="example@email.com" value={ emailData } onChange={ emailHandler } />
                    <button type="button" onClick={ subscribe } className="subscribeBtn" >SUBSCRIBE</button>
                </div>
                <small>No worries! We will not spam your inbox ); </small> 
            </div> */}
            <div className="social">
                <a href="https://github.com/NithinBalasubramanian" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.linkedin.com/in/techidiots-in-2203ba20a/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://twitter.com/Techidiots3" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.facebook.com/TechIdiots-101195472074045" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.instagram.com/techidiots/" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
            </div>
            <p className="copyCont">2020 - { Year } - &copy; || All Right Reserved  <br/>
            <a href="mailto:info@techidiots.in" target="_blank" rel="noreferrer">info@techidiots.in</a> || TECHIDIOTE || Powered by Pingifinit Software Technology</p>
          </div>
        </footer>
    )
}

export default Footer;
