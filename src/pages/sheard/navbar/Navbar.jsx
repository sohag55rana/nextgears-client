import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navlink = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Home</NavLink></li>
        <li><NavLink to="/models" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Models</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Dashboard</NavLink></li>
        {/* <li><NavLink to="/ourMenu" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Menu</NavLink></li> */}
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Contact</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>About Us</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Login</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Register</NavLink></li>
    </>
    return (
        <div className="navbar fixed bg-opacity-50 text-white z-10 bg-[#15151580] drop-shadow-md container">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl text-white custom-title">NEXT<span className='text-[#EEFF25]'>GEARS</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;