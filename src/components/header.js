import React from 'react'
import "./header.css"

const header = () => {
  return (
    <div>
        <div className='image'>
          <img src='justin_wang.jpeg' alt='justin wang headshot' ></img>
        </div>
        <h1>Hi, I am</h1>
        <h1>Justin Wang</h1>
        <p>I'm currently a second year computer science student</p>
        <p>studying at the University of Otttawa.</p>
    </div>
  )
}

export default header