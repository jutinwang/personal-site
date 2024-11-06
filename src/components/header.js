import React from 'react'
import "./header.css"
import Typewriter from 'typewriter-effect';

const header = () => {
  return (
    <div className='information'>
      <img class="headshot" src='new_headshot.png' alt='justin wang headshot' />
      <h1>Hi, I'm <br /> Justin Wang </h1>
      <Typewriter
        className="University"
        onInit={(typewriter) => {
          typewriter.typeString('Currently a 4th year CS student at the University of Ottawa.')
            .pauseFor(2500)
            .start();
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('You can get in contact here: Justinwang407@gmail.com')
            .pauseFor(2500)
            .start();
        }}
      />
      <p>Worked at the Royal Bank of Canada, Nokia and Telesat Canada.</p>
      <p>Created projects which demonstrate proficency in full stack web development.</p>
    </div>
  );
};
export default header