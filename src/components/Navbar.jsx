import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import profile from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const {user, logOut} = use(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
          alert('Logout successful');
            }).catch((error) => {
            // An error happened.
            console.error(error);
            });

    }

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
                        <img className='w-10 h-10 rounded-full' src={`${user? user.photoURL : profile}`} alt="" />
                        {user ? <button onClick={handleLogOut} className="btn btn-primary px-10">Logout</button> : (
                                <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
                            )}
                        
                    </div>
            </div>
        </div>
    );
};

export default Navbar;