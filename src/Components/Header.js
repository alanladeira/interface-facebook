import React, { Component } from 'react'

import '../../node_modules/@fortawesome/fontawesome-free/js/all.js'
import './Header.css'



class Header extends Component {
  render(){
    return (
      <>
        <header>
          <nav>
            <div className="logo">facebook</div>
            <div className="menu">Meu Perfil <span><i class="fas fa-user-circle"></i></span></div>
          </nav>        
        </header>
      </>
    )
  }
}

export default Header;