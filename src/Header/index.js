import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css"

const Header = () => {
  return (
    <nav className="navbar navbar-dark" style={{backgroundColor: '#563d7c'}}>
      <div className="container">
        <Link to="/" className="navbar-brand">Biblioteca Digital</Link> 
        <ul className="nav justify-content-end">          
          <li className="nav-item">
            <Link to="/" className="nav-link nav-link-color active">Livros</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link nav-link-color">Sobre</Link>
          </li>
        </ul>
      </div>      
    </nav>
      );
    }
        
export default Header;