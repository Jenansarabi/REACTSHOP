import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/actions/cartActions';

const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card h-100">
      <Link to= {`/products/${product._id}`} className="product-item">
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
          />
       </Link>

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <div className="card-text">
            <p>{ product.short }</p>
            <p className="text-danger h5">{ product.price }</p>

          <button className="btn btn-secondary" onClick={() => {
            dispatch(addToCart(product))
          }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
