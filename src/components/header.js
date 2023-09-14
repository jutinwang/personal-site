import React from 'react'
import "./header.css"
import Typewriter from 'typewriter-effect';

const header = () => {
  return (
    <div className='information'>
      <div className='text'>
        <h1>Hi, I'm Justin Wang</h1>
        <Typewriter
        onInit={
          (typewriter) => {
            typewriter.typeString('Currently a 3rd year CS student at the University of Otttawa.')
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
        <p>Previously worked at the Royal Bank of Canada as an iOS and Android Developer.</p>
        <p>Created projects which demonstrate knowledge of web stack, android, and iOS development.</p>
      </div>
    </div>
  )
}

export default header