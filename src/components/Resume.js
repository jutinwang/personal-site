import React from 'react'

const Resume = () => {
  return (
    <div style={{backgroundColor: "lightblue"}}>
        <h2>Resume</h2>
        <img src='Justinwang_Resume.png' alt='Justin Wang Resume' width="500" height="600"></img>
        <br/>
        <a herf = 'justin_wang_resume.pdf' download><button>Download My Resume!</button></a>
    </div>
  )
}

export default Resume