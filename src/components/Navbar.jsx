import React from 'react';
import { NavLink } from 'react-router';
import profile from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between text-accent'>
            <div className=''></div>
                <div className='nav flex justify-between items-center gap-6 '>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </div>
                <div className='login-btn flex justify-between items-center gap-5'>
                    <img src={profile} alt="" />
                    <button className="btn btn-primary px-10">Login</button>
                </div>
        </div>
    );
};

export default Navbar;