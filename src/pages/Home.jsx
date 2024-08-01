import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome Home</h1>
        <Link to={'/about'}>
        <button>Go to About</button></Link>
    </div>
  )
}

export default Home