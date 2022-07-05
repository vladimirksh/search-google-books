import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
      <header className="header">
        <h1 className="header__title">Google Books</h1>
        <SearchForm/>
      </header>
  );
}

export default Header;
