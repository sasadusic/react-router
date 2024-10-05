import React from 'react'
import { NavLink } from "react-router-dom"

const Header = ({ login, setLogin}) => {
  return (
    <nav className='nav'>
        <h2>React Router</h2>
        <div className='nav-right'>
           <NavLink className={({ isActive}) => (isActive ? 'active-link link' : 'link')} to="/">Home</NavLink> 
           <NavLink className={({ isActive}) => (isActive ? 'active-link link' : 'link')} to="/about">About</NavLink> 
           <NavLink className={({ isActive}) => (isActive ? 'active-link link' : 'link')} to="/profile">Profile</NavLink> 
           <button onClick={() => setLogin(!login)} className="btn">{login ? 'Logout' : 'Login'}</button>
        </div>
    </nav>
  )
}

export default Header