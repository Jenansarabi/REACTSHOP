import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

 const ShoppingCart = () => {
   
    const shoppingCart  = useSelector(state => state.cartReducer.shoppingCart);
     const totalCartAmount = useSelector( state => state.cartReducer.totalCartAmount);    
     const totalCartQunatity = useSelector( state => state.cartReducer.totalCartQunatity);    

    const empty = (
        <div className="p-2 flex align-items-center">
            Your cart is empty
        </div>

    )
    
   
    return (
        <div>
            {
                shoppingCart && shoppingCart.map( product => (
                 <CartProduct  key={product._id} product={product}/>              
                ))
            }
            {
                shoppingCart.length < 1 && empty

            }
                <div className="dropdown-divider"></div>

                <div className="p-2 flex justify-content-between align-items-center">
                    <div>
                        <div className="total-price" >
                            Total Amount: <span>{totalCartAmount }</span>
                        </div>
                        <div className="total-quantity" >
                            Total Quantity  <span>{totalCartQunatity}</span>
                        </div>
                        <small className="text-muted ">ink. vat </small>
                    </div>


                    <div>
                        <button className="btn btn-secondary">Checkout </button>
                    </div>

                </div>

        </div>
    )
}

export default ShoppingCart