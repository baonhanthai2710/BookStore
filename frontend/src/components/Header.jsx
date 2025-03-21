import {React, useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import { CgMenuLeft } from 'react-icons/cg';
import { TbUserCircle } from 'react-icons/tb';
import { RiUserLine, RiShoppingBag4Line } from 'react-icons/ri';

const Header = () => {
  
  const navigate = useNavigate()
  const [token] = useState('')
  const [active, setActive] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  }

  useEffect (()=>{
      const handleScroll = () => {
        if (window.scrollY > 0){
          if(menuOpened){
            setMenuOpened(false)
          }
        }
        setActive(window.scrollY > 30)
      }
      window.addEventListener("scroll", handleScroll)
      return()=>{
        window.removeEventListener("scroll", handleScroll)
      }
  }),[menuOpened]

  return (
    <header className='fixed top-0 w-full left-0 right-0 z-50'>
      <div className={`${active ? 'bg-white py-2.5' : 'py-3'} max-padd-container flexBetween border-b border-slate-900/10 rounded transition-all duration-300`}
      >
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
        <div className='flex-1'>
          <Navbar menuOpened={menuOpened} toggleMenu={toggleMenu} containerStyles={`${menuOpened ?
          "flex flex-col gap-y-16 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl" : 
          "hidden xl:flex justify-center gap-x-8 xl:gap-x-14 medium-15 px-2 py-1"}`} />
        </div>
        <div className='flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10'>
          <button aria-label='Menu'>
            <CgMenuLeft onClick={toggleMenu}
            className='text-2xl xl:hidden cursor-pointer' />
          </button>
          <Link to='/Cart' aria-label='Cart' className='flex relative'>
            <RiShoppingBag4Line className='text-[33px] bg-black text-primary p-1.5 rounded-full' />
            <span className='bg-primary ring-1 ring-slate-900/5 medium-14 absolute left-5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md '>0</span>          
          </Link>
          <div className="relative group">
            <div onClick={!token && navigate('/') } classname="">
            {token ? 
            (<div><TbUserCircle className="text-[29px] cursor-pointer"/></div>
            ) : (
                <button className='btn-outline flexCenter gap-x-2'>
                Login <RiUserLine className='text-xl' />
              </button>
            )}
            </div>
            {token &&<>
            <ul className="bg-white p-1 w-33 ring-1 ring-slate-900/5
             rounded absolute right-0 top-10 hidden group-hover:flex flex-col regular-14 shadow-md ">
              <li className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer">Orders</li>
              <li className="p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer">LogOut</li>
            </ul>
            </>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;