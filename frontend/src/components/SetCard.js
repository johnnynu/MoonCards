import './CSScomponents/SetCard.css'
import React from 'react'

const SetCard = ({ setName, imageUrl }) => {
  return (
    <div className="card card-bordered bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-10 pt-10">
        <img
          src={imageUrl}
          alt={`Pokémon set: ${setName}`}
          className="rounded-xl set-card-image" // Added CSS class "set-card-image"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{setName}</h2>
      </div>
    </div>
  )
}

export default SetCard
