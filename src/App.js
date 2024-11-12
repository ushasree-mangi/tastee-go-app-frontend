import {BrowserRouter,Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar' 
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'


import './App.css'

const App = () => (
  <>
  
  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route  component={NotFound} />
    
  </Switch>
  </BrowserRouter>
  </>
)

export default App


