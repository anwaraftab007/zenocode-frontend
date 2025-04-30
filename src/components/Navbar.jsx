import React from 'react';
import Button from './Button';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='w-full z-2 flex justify-between items-center py-4 px-4'>
        <nav className='min-w-[100px] flex gap-2 flex items-center'>
            <img src={logo} alt="" className="w-12 h-12" />
            <p className="text-3xl tt-hoves-pro">Zenocode</p>
        </nav>
        <nav className='min-w-[100px] flex gap-2'>
            <Button text="Work"/>
            <Button text="Contact" bgColor="#E4001C"/>
        </nav>
        </div>
    );
};

export default Navbar;