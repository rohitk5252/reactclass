import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({user, setUser}) => {
  const navigate = useNavigate()
    const localUser = localStorage.getItem("user")
    if(!localUser) {
      navigate("/login")
    }


    setUser(localUser)
    
    const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem(user);
    setUser(null)
    navigate("/login")
  }
  
  return (
    <div>
      <h1>WELCOME , {user}</h1>
      {user &&
      <button onClick={handleLogout}>Log Out</button>}
    </div>
  )
}

export default Home