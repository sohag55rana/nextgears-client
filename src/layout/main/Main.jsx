import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/sheard/footer/Footer';
import Navbar from '../../pages/sheard/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='min-h-screen'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;