import React from 'react'
import './nav.css'

import { IoMenu } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className='main-nav'>
        <ul>
            <li><IoMenu /></li>
        </ul>
    </nav>
  )
}

export default Nav