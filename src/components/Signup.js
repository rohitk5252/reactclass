import React, { useState } from 'react'


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [arr, setArr] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setArr([name, email, mobile, password])
    }

  return (
    <div className='form'>
        <label>Name: {arr[0]}</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Email: {arr[1]}</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Mobile: {arr[2]}</label>
        <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
        <label>Password : {arr[3]}</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className='Btn Btn--rounded Btn--success' onClick={handleSubmit}>Signup</button>
    </div>
  )
}

export default Signup