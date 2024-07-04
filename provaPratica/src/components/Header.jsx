import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="https://logodownload.org/wp-content/uploads/2019/08/senai-logo-0.png" alt="Logo SENAI" className="logo" />
      <div className="header-text">
        <h1>Clubes</h1>
        <p>Arthur Nunis - 3C</p>
      </div>
    </header>
  );
};

export default Header;
