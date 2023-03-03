import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
const Products = () => {

  const [data, setData] = useState([])
  // let { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(response => response.json())
      .then(json => {
        console.log(json.products)
        setData(json.products)
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
            className="card-img-top mx-2" alt={prod.title} />
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

export default Products