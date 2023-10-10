import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='lg:px-0 px-1'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;