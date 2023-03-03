import React, {useState, useEffect} from 'react'
const Carts = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/carts`)
      .then(response => response.json())
      .then(json => {
        console.log(json.carts)
        setData(json.carts)
      })
  }, []);

  return (
    <section >
    <div className="container py-5">
    <div className="row justify-content-center">
        {data.map((prod)=>{
            return (
                <div className="col-md-8 col-lg-6 col-xl-4 my-3">
        <div className="card text-black">
          <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src={prod.thumbnail}
            className="card-img-top" alt={prod.title} />
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{prod.title}</h5>
              <p className="text-muted mb-4">{prod.description}</p>
            </div>
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>${prod.price}</span>
            </div>
          </div>
        </div>
      </div>
            )
        })}
      
    </div>
  </div>
</section>
  )
}

export default Carts