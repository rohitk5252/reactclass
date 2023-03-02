import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
const UserCard = () => {

  const [data, setData] = useState([])
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
  }, [id]);

  
  return (
    <div key={id} className='card'>
        <div className='container'>
            <div className='userid'>{id}</div>
        <div className='content'>
            <h4>{data.name}</h4 >
            <h3>@{data.name}</h3>
            <p>{data.email}</p>
            {/* <p>{address}</p> */}
        </div>
        </div>
    </div>
  )
}

export default UserCard