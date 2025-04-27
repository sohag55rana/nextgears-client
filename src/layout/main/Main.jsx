import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../pages/sheard/footer/Footer';
import Navbar from '../../pages/sheard/navbar/Navbar';

const Main = () => {
    // const location = useLocation();
    // console.log(location);
    // const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            <div className='min-h-screen'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* <div className='min-h-screen'>
                {!noHeaderFooter && <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
            {!noHeaderFooter && <Footer></Footer>} */}
        </div>
    );
};

export default Main;