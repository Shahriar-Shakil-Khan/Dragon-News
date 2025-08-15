import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import profile from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const {user} = use(AuthContext);
    return (
        <div className=''>
            <div className='flex justify-between text-accent'>
                <div className="className">{user && user.email}</div>
                
                    <div className='nav flex justify-between items-center gap-6 '>

                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/career">Career</NavLink>
                    </div>
                    <div className='login-btn flex justify-between items-center gap-5'>
                        <img src={profile} alt="" />
                        <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;