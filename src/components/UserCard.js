import React, {useState, useEffect} from 'react'
const UserCard = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setUsers(json.users)
      })
  }, []);

  return (
    <section className="vh-100 user" style={{backgroundColor: "#fff"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      {
        users.map((user) => {
          return (
              <div className="col-3 card mx-2 my-2">
                <div className="img_part">
                  <img src={user.image} alt="" />
                </div>
                <div className="content">
                  <h3>{user.firstName}</h3>
                  <span>{user.age}</span>
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                </div>
              </div>
          )
        })
      }
    </div>
  </div>
</section>
  )
}

export default UserCard