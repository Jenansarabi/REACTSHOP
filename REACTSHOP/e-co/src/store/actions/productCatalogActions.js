import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProductCatalog = () => {
    return async dispatch => {
      const res = await axios.get('http://localhost:9999/api/products')
      dispatch(setProducts(res.data))
    }
}

export const setProducts = products => {
    return {
        type: actiontypes().productCatalog.set,
        payload: products
    }
}


 
  export const setProduct = (product) => {
    return {
        type:actiontypes().products.setProducts,
        payload: product
      

    }

}
        

export const getOneProduct = id => {

    return async dispatch => {
       //dispatch(loading(true));
  
          const res = await axios.get(`http://localhost:9999/api/products/${id}`);
         
         
        setTimeout(() => {
          dispatch(setProducts(res.data));
          //dispatch(loading(false));
           
         },1000)
    }

}













