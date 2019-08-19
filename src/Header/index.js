import React from 'react';

import "./styles.css"

const Header = () => {
  return (
    <nav className="navbar navbar-dark" style={{backgroundColor: '#563d7c'}}>
      <div className="container">
        <a className="navbar-brand" href="/">Biblioteca Digital</a> 
        <ul className="nav justify-content-end" >
          <li className="nav-item">
            <a className="nav-link nav-link-color active" href="/">Autores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-color" href="/">Livros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-color" href="/">Sobre</a>
          </li>
        </ul>
      </div>      
    </nav>
      );
    }
        
export default Header;