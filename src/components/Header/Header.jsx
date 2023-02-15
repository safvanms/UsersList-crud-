import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'


export default function Header() {

     let styles = {
          textDecoration : "none"
     }

  return (
    <div className='nav'>
    <NavLink style={styles} activeClassName="active" to='/user'>
     <h3>User Management</h3>
    </NavLink>
    <NavLink style={styles} activeClassName="active" to='/'>
     <h3>Home</h3>
    </NavLink>
    </div>
  )
}
