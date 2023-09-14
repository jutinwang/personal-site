import React from 'react'
import './External.css'

const External = () => {
  return (
    <div className='externalLinks'>
        <div className='linkedinimage'>
            <a href='https://www.linkedin.com/in/justin-wang-181b28203/' target="_blank" rel="noopener noreferrer"><img class = 'linkedin' src='linkedin.png' alt = 'linkedin logo'></img></a>
        </div>
        <div className='githubimage'>
            <a href='https://github.com/jutinwang' target="_blank" rel="noopener noreferrer"><img class = 'github' src='github.png' alt = 'github logo'></img></a>
        </div>
        <div className='resumeImage'>
            <a href="Justin_Wang_Resume_2023.pdf" download><button class="Resumebutton"> Resume</button></a>
        </div>
    </div>
  )
}

export default External