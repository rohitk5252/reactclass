import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({user, setUser}) => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("0lelplR")
    const [userName, setUserName] = useState("kminchelle")

    const localuser = localStorage.getItem("user")
    if(localuser) {
      setUser(localuser)
      navigate("/")
    }

    const handleLogin =  async (e) => {
        e.preventDefault()

        if(!userName) {
          alert("Name field required")
          return ;
        } 
         if(!password) {
          alert("Password field required")
          return ;
         }

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: userName,
              password:  password,
    })
  })
  const json = await response.json();
  console.log(json)
  if(response.ok == false) {
    alert(json.message)
    return
  }

  localStorage.setItem("user",userName)

  localStorage.setItem(userName,JSON.stringify({
    name: json.firstName,
    email: json.email,
    image: json.image,
    token : json.token
  }))

  setUser(userName)
  navigate("/")
}


    
  return (
    <div className='form'>
        <label htmlFor="">Name</label>
        <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>

        <div>Dont have an Account? <Link to="/signup"> Signup</Link></div>
    </div>
  )
}

export default Login