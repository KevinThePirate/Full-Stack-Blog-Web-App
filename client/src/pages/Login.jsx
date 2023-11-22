import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='auth'>
      <h1> Log In</h1>
      <form>
        <input type='text' placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Log In</button>
        <span>No account? <Link to="/register">Register here.</Link></span>
      </form>
    </div>
  )
}
