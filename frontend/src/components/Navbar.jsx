import React from 'react'
import { NavLink } from 'react-router-dom'
import {IoLibrary, IoMailOpen} from 'react-icons/io5'
import {TbHomeFilled} from 'react-icons/tb'

const Navbar = ({containerStyles/*, toggleMenu, menuOpened*/}) => {
    const navItems = [
      {to: '/', label: 'Home', icon:<TbHomeFilled/>},
      {to: '/shop', label: 'Shop', icon:<IoLibrary/>},
      {to: '/contact', label: 'Contact', icon:<IoMailOpen/>},
    ]
  return (
    <nav className={containerStyles}>
      {navItems.map(({to,label,icon})=>(
        <div key={label} className="inline-flex relative top-1">
          <NavLink to={to} className={({isActive})=> isActive ? "active-link flexCenter gap-x-2" : "flexCenter gap-x-2"}>
            <span className="text-xl">{icon}</span>
            <span className="medium-14">{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default Navbar