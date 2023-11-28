import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Login() {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs)
      await axios.post("http://localhost:8800/api/auth/login", inputs);
      console.log('Logged In')
      navigate("/")
    } catch (err) {
      console.log(err.response.data)
      setError(err.response.data)
    }
  };

  return (
    <div className='auth'>
      <h1> Log In</h1>
      <form>
        <input type='text' placeholder='username' name="username" onChange={handleChange} />
        <input type="password" placeholder='password' name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Log In</button>
        {err && <p>{err}</p>}
        <span>No account? <Link to="/register">Register here.</Link></span>
      </form>
    </div>
  )
}
