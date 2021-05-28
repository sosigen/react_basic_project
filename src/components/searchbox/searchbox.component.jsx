import './searchbox.style.css'
import React from 'react'

export const SearchBox = ({ placeholder, handleChange }) => {
  return ( 
    <input 
      type='search' 
      placeholder= { placeholder }
      onChange={ handleChange }
      className='search'
    />
  )
}