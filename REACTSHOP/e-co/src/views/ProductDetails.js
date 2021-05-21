import axios from 'axios'
import React, { useState, useEffect} from 'react'


 const ProductDetails = ({ match }) => {
//   console.log(match)

  const [product, setProduct] = useState(null)
  const [ loading, setLoading] = useState(true);

  const getProduct = async () => {
      
      const res =await axios.get(`http://localhost:9999/api/products/${match.params.id}`)
      console.log(res.data)
      setProduct(res.data)
      setLoading(false)
  }


  useEffect(() => {
      getProduct()
  }, [])

    if(!loading) {

    
        return (
              <div className="details p-2 d-flex justify-content-between align-items-center">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="..."
                    />

              <div className="h2-responsive text-space text-md-left font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                       
                        <h2>{ product.name }</h2>
                        <p> { product.short } </p>
                        <p> { product.desc } </p>

                        <p className="text-danger h5">{ product.price }</p>
                         <button 
                         className="btn btn-secondary  " 
                        
                        >Add To Cart</button>


                                    
                </div>
            </div>
            
        )
    } else {
        return (
            <div className="product-details">
                <h3>Loading...</h3>
            </div>
        )
    } 

}

export default ProductDetails
