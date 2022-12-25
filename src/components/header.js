import React from 'react'
import "./header.css"
import Typewriter from 'typewriter-effect';

const header = () => {
  return (
    <div className='head'>
          <img class = "headshot" src='justin_wang.jpeg' alt='justin wang headshot' ></img>
        <div className='text'>
          <h1>Hi, I am</h1>
          <h1>Justin Wang</h1>
          <Typewriter
          onInit={
            (typewriter) => {
              typewriter.typeString('Currently a 2nd year CS student at the University of Otttawa.')
                .pauseFor(2500)
                .start()
            }
          }
          />
          <Typewriter
          onInit={
            (typewriter) => {
              typewriter.typeString('You can get in contact here: Justinwang407@gmail.com')
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
    </div>
  )
}

export default header