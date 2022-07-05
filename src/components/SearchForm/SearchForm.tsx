import React from 'react';
import './SearchForm.css';
import find from "../../images/find.svg";

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

const types = ['relevance ', 'newest']


function SearchForm() {
  return (
      <form className="form">
        <input 
          className="form__input"
          type="text"
          placeholder="type text"/>
        <button className="form__button">
          <img alt="search" src={find} className="form__find-img" />
        </button>
        <select className="form__select">{
          categories.map(categorie => 
            <option>{categorie}</option>
          )
          }</select>

          <select className="form__select">{
          types.map(type => 
            <option>{type}</option>
          )
          }</select>
      </form>
  );
}

export default SearchForm;
