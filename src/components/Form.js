import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleLogin}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button>Login</button>
    </form>
  )
}

export default Login