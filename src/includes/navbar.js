import React from 'react';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';



const Navbar = () => {
    return(
      <div className="NavbarMain">
        <div className="NavContainer row">
            <div className="col-md-4">
                <h2>Tech Idiots</h2> 
                <BiMenuAltLeft />
            </div>
        <div className="col-md-8">
            <div className="NavList">
                <ul className="NavListMenu">
                    <li><NavLink to="/" activeClassName="activeMenu" exact>HOME</NavLink></li>
                    <li><NavLink to="/News" activeClassName="activeMenu">NEWS</NavLink></li>
                    <li><NavLink to="/Books" activeClassName="activeMenu">BOOKS</NavLink></li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      )
}

export default Navbar;
