import React from 'react'
import './External.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const External = () => {
  return (
    <div class='externalLinks'>
      <div class='icon1'>
        <a href='https://www.linkedin.com/in/justin-wang-181b28203/' target="_blank" rel="noopener noreferrer"><LinkedInIcon class="linkedin"/></a>
      </div>
      <div class='icon2'>
        <a href='https://github.com/jutinwang' target="_blank" rel="noopener noreferrer"><GitHubIcon class="github"/></a>
      </div>
      <div class='icon3'>
        <a href="Justin-Wang-Resume.pdf" download><DescriptionIcon class="resume"/></a>
      </div>
    </div>
  )
}

export default External