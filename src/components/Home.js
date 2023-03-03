import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'

const Home = ({user, setUser}) => {
  const [catagory, setCatagory] = useState([{title:"Users", api: "users", img :"https://cdn-icons-png.flaticon.com/512/33/33308.png"}, {title:"Products", api: "products", img: "https://cdn-icons-png.flaticon.com/512/3737/3737372.png"},{title:"Carts", api: "carts", img: "https://cdn-icons-png.flaticon.com/512/1474/1474613.png"}])
  return (
    
    <section className="banner">
      <div className="container">
        <div className="row flexrow">
          {!user &&  <h2 className='mrtop25'>Please Log in First</h2> }
          {user && <h1 className='mrtop25'>Welcome , {user}</h1> }
          {user && catagory.map((catag) => {
            return <Card key={catag.api} title={catag.title} api={catag.api} img={catag.img}/>
          })}
        </div>
      </div>
    </section>

  )
}

export default Home