import React from 'react'

export default function PhotoLink(props) {
  return (
    <div className="photo-link">
        <div className="img-container">
          <img src={props.img} alt={props.alt}/>
        </div>
        <div className="link-title">
          <a href={props.link}>
            <h2>{props.title}</h2>
          </a>
        </div>
    </div>
  )
}
