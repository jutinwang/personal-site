import React, {useRef} from 'react'

const Resume = () => {
  return (
    <div>
        <h2>Resume</h2>
        <img src='Justinwang_Resume.png' alt='Justin Wang Resume' width="500" height="600"></img>
        <br/>
        <a href="justin_wang_resume.pdf" download>
         <button type="button">Download Resume!</button>
        </a>
    </div>
  )
}

export default Resume