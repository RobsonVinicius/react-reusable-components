import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

import "./styles.css";

const Header = () => {
  return (
    <nav className="navbar navbar-dark" style={{backgroundColor: '#563d7c'}}>
      <div className="container">
        <LinkWrapper to="/" className="navbar-brand" activeStyle={{}}>Biblioteca Digital</LinkWrapper> 
        <ul className="nav justify-content-end">          
          <li className="nav-item">
            <LinkWrapper exact to="/" className="nav-link nav-link-color">Livros</LinkWrapper>
          </li>
          <li className="nav-item">
            <LinkWrapper exact to="/sobre/" className="nav-link nav-link-color">Sobre</LinkWrapper>
          </li>
        </ul>
      </div>      
    </nav>
      );
    }
        
export default Header;