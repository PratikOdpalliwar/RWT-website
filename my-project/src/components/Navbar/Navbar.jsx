import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css'; // Import your CSS file

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header>
            <div className="container">
                <nav className={isActive ? 'active' : ''}>
                    <div className="menu-icons" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                    </div>
                    <Link to="/" className="logo">RWT LOGO</Link>
                    <ul className="nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/">Services <i className="fas fa-caret-down"></i></Link>
                            <ul className="sub-menu">

                            <li>
                                    <Link to="/">Offerings 
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Digital Advisory</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Experience Design</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Software Engineering</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Labs</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Content Engineerings</Link>
                                        </li>
                                    </ul> 
                                </li>

                                <li>
                                    <Link to="/">Industries 
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Banking, Financial Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Communication</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Customer & Retail</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Healthcare & Life</Link>
                                        </li>
                                    </ul> 
                                </li>

                                <li>
                                    <Link to="/">Practices
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Agile</Link>
                                        </li>
                                        <li>
                                            <Link to="/">AI & Machine Learning</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Big Data & Analytics</Link>
                                        </li>
                                        <li>
                                            <Link to="/">BlaockChain</Link>
                                        </li>
                                    </ul> 
                                </li>

                                <li>
                                    <Link to="/">Private Equity
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">View Private Equity Offerings</Link>
                                        </li>
                                    </ul> 
                                </li>
                                  </ul>
                        </li>

                        <li>
                            <Link to="/">Work</Link>
                        </li>

                        <li>
                            <Link to="/">Careers</Link>
                        </li>

                        <li>
                            <Link to="/">About <i className="fas fa-caret-down"></i></Link>
                            <ul className="sub-menu">

                            <li>
                                    <Link to="/">About Us 
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Sustainability</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Corporate Social Responsibility</Link>
                                        </li>
                                                                            </ul> 
                                </li>

                                <li>
                                    <Link to="/">Leadership
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Corporate</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Regional</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Business Unit</Link>
                                        </li>
                                    </ul> 
                                </li>

                                <li>
                                    <Link to="/">Location
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Regional Office</Link>
                                        </li>
                                    </ul> 
                                </li>

                                <li>
                                    <Link to="/">News & Events
                                        <i className="fas fa-caret-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Events</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Brand & Identity Guidelines</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Awards</Link>
                                        </li>
                                    </ul> 
                                </li>

                            </ul>
                        </li>
                
                        <li className="move-right btn">
                            <Link to="/">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

