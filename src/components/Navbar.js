import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/about">
                <h1>About</h1>
            </Link>
            <Link to="/contact">
                <h1>Contact</h1>
            </Link> 
            <Link to="/signup">
                <h1>Signup</h1>
            </Link> 
            <Link to="/login">
                <h1>Login</h1>
            </Link> 
            <Link to="/users">
                <h1>Users</h1>
            </Link> 
    </nav>
  )
}

export default Navbar