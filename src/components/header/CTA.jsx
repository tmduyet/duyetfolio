import React from 'react'
import CV from '../../assets/CV.txt'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download={true} className={
      "btn"
      }>Download CV</a>
      <a href="#contract" className='btn btn-primary'>Chat with me</a>
    </div>
  )
}

export default CTA