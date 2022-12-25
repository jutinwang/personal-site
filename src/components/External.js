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
            <a href="justin_wang_resume.pdf" download><button type="button"><img class = 'resume' src='resume_icon.png' alt = 'resume icon'></img></button></a>
        </div>
    </div>
  )
}

export default External