import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProtectedRoute }  from './routes/ProtectedRoute';
import Navbar from'./components/navigation/Navbar';
import Home from './views/Home';
import News from './views/News';
import PostDetails from './views/PostDetails';



import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Login from './views/Login';
import Create from './views/Create';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        
        <div className="container">
          <Switch>
             <Route exact path="/" component={Home}/>

             <ProtectedRoute exact path="/create" component={Create} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/news" component={News} />
             <Route exact path="/posts/:id" component={PostDetails}/>
             <Route exact path="/products" component={Products} />
             <Route  path="/products/:id" component={ProductDetails} /> 
             

          </Switch>
        </div>
      </BrowserRouter>   
    </div>
  );
}

export default App;
