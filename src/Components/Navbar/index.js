import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <h2 className="logo-text">Ultra Profile</h2>
                </div>

                <input type="checkbox" id="nav" />
                <label htmlFor="nav"></label>


                <ul className="ul-list">
                    <li className="list-item"><NavLink to='/'>Home</NavLink></li>
                    {/* <li className="list-item"><a href="#">Work</a></li>
                    <li className="list-item"><a href="#">Portfolio</a></li>
                    <li className="list-item"><a href="#">Resume</a></li>
                    <li className="list-item"><a href="#">About</a></li> */}
                    <li className="list-item"><NavLink to='contact'>Contact</NavLink></li>
                </ul>

            </div>

        </div>
    );
}

export default Navbar;