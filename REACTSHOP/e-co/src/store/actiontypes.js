const actiontypes = () => {
    return {
     productCatalog: {
      set: 'SET_PRODUCT_CATALOG',
      
     },
    
     cart: {
    add:'ADD_TO_CART',
     remove: 'REOMVE_FROM_CART',
     delete: 'DELETE_FROM_CART'
     
    },

    productDetails: {
      add: 'ADD_TO_CART',
     setProduct:'SET_PRODUCT',
     loading: 'SET_LOADING'

    },
  
    
    auth: {
        login: 'LOGIN',
        logout: 'LOGOUT'
    },

    posts: {
        getPosts: 'Get_POST',
        getPost: 'Get_ONE_POST',
        loading: 'LOADING'
    }
    
   
    
 } 
}
export default actiontypes;