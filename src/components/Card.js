import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({title, api, img}) => {
  const navigate = useNavigate()
  const handleClick = (api) => {
    navigate(`/${api}`)
  }

  return (
    <div className="card mx-3 my-3" style={{width: "18rem"}}>
    <img className="img-fluid img-thumbnail mt-2" src={img}  alt="" />
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a onClick={()=>handleClick(api)} className="btn btn-primary">All {title}</a>
  </div>
</div>
  )
}

export default Card