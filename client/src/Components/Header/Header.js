import React from 'react'

export default function Header(props) {
  return (
    <div className="centered">
        <h1>{props.title}</h1>
      <div className="separater"></div>
    </div>
  )
}
