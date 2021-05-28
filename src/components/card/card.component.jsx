import React from 'react'
import './card.style.css'

export const Card = props => {
  return (
    <div className='card-container'>
      <img alt='avatar' src={`https://eu.ui-avatars.com/api/?name=${props.user.name.split(' ')[0]}+${props.user.name.split(' ')[1]}`}/>
        <h2> {props.user.name} </h2>
        <p> {props.user.email} </p>
    </div>
  )
}