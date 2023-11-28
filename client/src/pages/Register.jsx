import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs)
    console.log(typeof inputs)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='auth'>
      <h1> Register</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange} />
        <input required type='email' placeholder='email' name="email" onChange={handleChange} />
        <input required type="password" placeholder='password' name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        <span>Already have an account? <Link to="/login">Log In here.</Link></span>
      </form>
    </div>
  )
}
