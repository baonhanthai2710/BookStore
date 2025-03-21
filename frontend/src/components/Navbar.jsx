import React from 'react'
import { NavLink } from 'react-router-dom'
import {IoLibrary, IoMailOpen} from 'react-icons/io5'
import {TbHomeFilled} from 'react-icons/tb'
import {FaRegWindowClose} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({containerStyles, toggleMenu, menuOpened}) => {
    const navItems = [
      {to: '/', label: 'Home', icon:<TbHomeFilled/>},
      {to: '/shop', label: 'Shop', icon:<IoLibrary/>},
      {to: '/mailto:baonhanthai2710@gmail.com', label: 'Contact', icon:<IoMailOpen/>},
    ]
  return (
    <nav className={containerStyles}>
      {menuOpened && (
        <> 
          <FaRegWindowClose onClick={toggleMenu} 
          className="text-xl self-end cursor-pointer relative left-8"/>
          <Link to={'/'} className="bold-24 mb-10 ">
            <h4>TheCat</h4>
          </Link>
        </>
      )}
      {navItems.map(({to,label,icon})=>(
        <div key={label} className="inline-flex relative top-1">
          {/* emailto use a tag instead of navlink for properly work */}
          {to.startsWith('mailto') ? (
            <a onCLick={menuOpened ? toggleMenu : undefined} href={to} className="flexCenter gap-x-2">
                <span className="text-xl">{icon}</span>
                <span classname="medium-16">{label}</span>
            </a>
          ) :(<NavLink to={to} className={({isActive})=> isActive ? "active-link flexCenter gap-x-2" : "flexCenter gap-x-2"}>
            <span className="text-xl">{icon}</span>
            <span className="medium-14">{label}</span>
          </NavLink>)}
        </div>
      ))}
    </nav>
  )
}

export default Navbar