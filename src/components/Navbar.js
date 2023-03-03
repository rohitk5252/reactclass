import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = ({user, setUser, pfp, setPfp}) => {
    const navigate = useNavigate()
    const localUser = localStorage.getItem("user")

    useEffect(() => {
        if(localUser){
            setUser(localUser)
            setPfp(JSON.parse(localStorage.getItem(localUser)).image)
        }
    }, [])
    
    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem(user);
        setPfp("")
        setUser(null)
        navigate("/")
    }

  return (
    <header id="header" className='header'>
    <div className="container">
            <div className="logo_part">
                    <a href="/"><img src={pfp} alt="" /></a>
            </div>

        <nav>  
            <ul className='navigation'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>

        <div className="buttons">
                <button onClick={handleLogout} className='Btn Btn--rounded Btn--danger'>Logout</button>
        </div>
    </div>       
</header>
  )
}

export default Navbar