import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
        <div>
            {/*logo*/}
        <Link to={'/'}>
            <img src={logo} alt="" />
        </Link>
        </div>
    </header>
  )
}

export default Header
