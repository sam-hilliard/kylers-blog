import React from 'react'

import Header from '../../Components/Header/Header'
import BlogCard from '../../Components/BlogCard/BlogCard'

export default function BlogPage(props) {

  function getKittenCards(numCards) {
    const height = 1000
    const width = 600
    const kittentURL = `https://placekitten.com/${height}/${width}`
    let cards = []
    
    for (let i = 0; i < numCards; i++) {
      cards.push(
        <BlogCard title="kitten" img={kittentURL}/>
      )
    }

    return cards
  }

  return (
    <div className="container">
      <Header title={props.title} />
        <div className="posts-container">
          {getKittenCards(5)}
        </div>
    </div>
  )
}