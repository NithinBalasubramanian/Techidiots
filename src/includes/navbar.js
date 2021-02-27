import React from 'react';
import '../style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return(
      <div className="NavbarMain">
        <div class="NavContainer row">
            <div className="col-md-4">
                <h1>Tech Idiots</h1> 
            </div>
        <div className="col-md-8">
            <div className="NavList">
                <ul className="NavListMenu">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">BOOKS</a></li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      )
}

export default Navbar;
