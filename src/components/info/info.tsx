import React from 'react'
import { useNavigate } from 'react-router-dom'
import './info.scss'
import SocialMedia from '../socialMedia/socialMedia'
const Info = () => {
  return (
    <div className='info'>
      <h1>Naveen Bahunadham</h1>
      <h2>Software Engineer</h2>
      <p>
        Full Stack Developer with 2+ years in <span>MERN</span> and <span>.Net Core</span> Application development.
      </p>
      <p>
        Skilled in reusable components, performance optimization, MongoDB, Docker, Kubernetes, GCP and responsive design.
      </p>
      <div className="socialMedia">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Info