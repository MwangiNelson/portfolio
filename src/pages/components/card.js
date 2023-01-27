import React from 'react'
import './components.css'

const ContentCard = (props) => {
  return (
    <div className="content-card">
        <div className="content-header">
            <h2>{props.title}</h2>
        </div>
        <div className="content-ingredients">
            <span>{props.ingredients.map((ingredient)=>{return ingredient})}</span>
        </div>
        <div className="content-procedure">
            <p>{props.description}</p>
        </div>
        <div className="content-owner">
            <p>~{props.owner}</p>
        </div>
    </div>
  )
}

export default ContentCard