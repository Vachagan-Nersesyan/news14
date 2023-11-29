import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutPage: React.FC = () => {

  const location = useLocation()


  return (
    <h1 style={{color:location.search.slice(1, location.search.length)}}>About Page</h1>
  )
}

export default AboutPage