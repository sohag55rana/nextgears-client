import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthProvider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "LogOut Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.error(error)
            )
    }

    const navlink = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Home</NavLink></li>
        <li><NavLink to="/models" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Models</NavLink></li>
        {/* <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Dashboard</NavLink></li> */}
        <li><NavLink to="/dashboard/cart"><button className="btn">
            <FaShoppingCart className='mr-2 text-2xl'></FaShoppingCart> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
        </button></NavLink></li>
        {/* <li><NavLink to="/ourMenu" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Menu</NavLink></li> */}
        {/* <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Contact</NavLink></li> */}
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>About Us</NavLink></li>


        {/* <li><NavLink to="/register" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Register</NavLink></li> */}
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
                        className="menu menu-sm dropdown-content bg-red-500 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl">
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
            <div className="navbar-end mr-12">
                {
                    user ? <div className='flex items-center'> <p>{user.email}</p> <button onClick={handleLogout} className='btn btn-primary ml-4 text-white'>LogOut</button></div> : <li><NavLink to="/login" className={({ isActive }) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Login</NavLink></li>
                }
            </div>
        </div>
    );
};

export default Navbar;