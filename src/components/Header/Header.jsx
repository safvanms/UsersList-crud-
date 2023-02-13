import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


export default function Header() {

     let styles = {
          textDecoration : "none"
     }

  return (
    <div className='nav'>
    <Link style={styles} to='/user'>
     <h3>User Management</h3>
    </Link>
    <Link style={styles} to='/'>
     <h3>Home</h3>
    </Link>
    </div>
  )
}
