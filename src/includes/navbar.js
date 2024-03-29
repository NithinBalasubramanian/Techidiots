import React , { useState , useEffect } from 'react';
import logo from '../assets/logo/techidiots.png';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink , Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';



const Navbar = () => {

    let [ display_status , setDisplay_status ] = useState(false);
    
    const sidebarStatusHandler = () =>{
        setDisplay_status(!display_status);
    }
    
    
    return(
      <div className="NavbarMain">
        <div className="NavContainer row">
            <div className="col-md-4 navHead">
                <Link className="navHeadLogo" to="/" >
                    <img src={logo} alt="Techidiots" className="logo_img" />
                </Link>
                <div className="navHeadMenu">
                    <BiMenuAltLeft onClick={ sidebarStatusHandler }  size="40px" color="#fff" style={{margin:"10px"}}/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="NavList">
                    <ul className="NavListMenu">
                        <li><NavLink to="/" activeClassName="activeMenu" exact>HOME</NavLink></li>
                        <li><NavLink to="/Category/techNews" activeClassName="activeMenu" exact>NEWS</NavLink></li>
                        <li><NavLink to="/Category/techInfo" activeClassName="activeMenu" exact>TECH</NavLink></li>
                        <li ><NavLink to="/Category/automobiles" activeClassName="activeMenu" exact>AUTOMOBILES</NavLink></li>
                        <li><NavLink to="/Category/finance" activeClassName="activeMenu" exact>FINANCE</NavLink></li>
                        <li><NavLink to="/Category/programming" activeClassName="activeMenu" exact>PROGRAMMING</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={ (display_status) ? 'mobileNav mobOn' : 'mobileNav'}>
            <div className="NavListMob">
                <ul className="NavListMenuMob"  onClick={ sidebarStatusHandler } >
                    <li><NavLink to="/" activeClassName="activeMenu" exact>HOME</NavLink></li>
                    <li><NavLink to="/Category/techNews" activeClassName="activeMenu" exact>TECH NEWS</NavLink></li>
                    <li><NavLink to="/Category/techInfo" activeClassName="activeMenu" exact>TECH INFO</NavLink></li>
                    <li><NavLink to="/Category/finance" activeClassName="activeMenu" exact>FINANCE</NavLink></li>
                    <li><NavLink to="/Category/automobiles" activeClassName="activeMenu" exact>AUTOMOBILES</NavLink></li>
                    <li><NavLink to="/Category/programming" activeClassName="activeMenu" exact>PROGRAMMING</NavLink></li>
                    <li><NavLink to="/Category/others" activeClassName="activeMenu" exact>OTHERS</NavLink></li>
                </ul>
            </div>
        </div>
      </div>
      )
}

export default Navbar;
