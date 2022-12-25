import React from 'react'
import './External.css'

const External = () => {
  return (
    <div className='externalLinks'>
        <div className='linkedin'>
            <a href='https://www.linkedin.com/in/justin-wang-181b28203/' target="_blank" rel="noopener noreferrer"><img src='linkedin.png' alt = 'linkedin logo'></img></a>
        </div>
        <div className='github'>
            <a href='https://github.com/jutinwang' target="_blank" rel="noopener noreferrer"><img src='github.png' alt = 'github logo'></img></a>
        </div>
    </div>
  )
}

export default External