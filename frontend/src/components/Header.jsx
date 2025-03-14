import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import { CgMenuLeft } from 'react-icons/cg';
import { TbUserCircle } from 'react-icons/tb';
import { RiUserLine, RiShoppingBag4Line } from 'react-icons/ri';

const Header = () => {
  return (
    <header className='fixed top-0 w-full left-0 right-0 z-50'>
      <div className='bg-white py-2.5 max-padd-container flexBetween border-b border-slate-900/10 rounded transition-all duration-300'>
        {/* Logo */}
        <Link to='/' className='flex-1 flex items-center justify-start'>
          <img
            src={logo}
            alt='TheCatReader Logo'
            height={36}
            width={36}
            className='hidden sm:flex mr-2'
          />
          <h4 className='bold24'>TheCatReader</h4>
        </Link>

        {/* Navbar */}
        <div className='flex-1'>
          <Navbar />
        </div>

        {/* Right Side */}
        <div className='flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10'>
          <button aria-label='Menu'>
            <CgMenuLeft className='text-2xl xl:hidden cursor-pointer' />
          </button>

          <Link to='/Cart' aria-label='Cart' className='flex relative'>
            <RiShoppingBag4Line className='text-[33px] bg-secondary text-primary p-1.5 rounded-full' />
            <span className='bg-primary ring-1 ring-slate-900/5 medium-14 absolute left-5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md '>0</span>          
          </Link>

          <div>
            <button className='btn-outline flexCenter gap-x-2'>
              Login <RiUserLine className='text-xl' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;