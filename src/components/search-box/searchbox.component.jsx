import React from 'react';
import './searchbox.styles.css';

export const SearchBox = ({ placeholder, handleChange}) => (
  <input className='search'
    type='search' 
    onChange = { handleChange }
    placeholder={placeholder}/>
);