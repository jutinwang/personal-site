import React from 'react'
import './External.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const External = () => {
  return (
    <div className='externalLinks'>
      <a href='https://www.linkedin.com/in/justin-wang-181b28203/' target="_blank" rel="noopener noreferrer"><LinkedInIcon class="icon"/></a>
      <a href='https://github.com/jutinwang' target="_blank" rel="noopener noreferrer"><GitHubIcon class="icon"/></a>
      <a href="Justin_Wang_Resume_2023.pdf" download><DescriptionIcon class="icon"/></a>
    </div>
  )
}

export default External