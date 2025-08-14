import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4'>
            <img className='w-[500px]' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent'>{format(new Date(), "EEEE, LLLL LL, yyyy")}</p>
        </div>
    );
};

export default Header;