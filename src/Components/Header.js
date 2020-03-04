import React, { Component } from 'react'
import {FaUserCircle} from 'react-icons/fa'

import './Header.css'




class Header extends Component {
  render(){
    return (
      <>
        <header>
          <nav>
            <div className="logo">facebook</div>
            <div className="menu">Meu Perfil <span><FaUserCircle className="icon" /></span></div>
          </nav>        
        </header>
      </>
    )
  }
}

export default Header;