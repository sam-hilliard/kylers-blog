import React from 'react'

import Header from '../../Components/Header/Header'

export default function BlogPage(props) {
  return (
    <div>
      <Header title={props.title} />
    </div>
  )
}