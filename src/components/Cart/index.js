import {Component} from 'react'
import CartItem from '../CartItem'
import Cookies from 'js-cookie'
import './index.css'

import { ThreeDots } from 'react-loader-spinner'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Cart extends Component { 
  state = {
    cartItemsList: [],
    apiStatus: apiStatusConstants.initial,
    errorMsg:""
  }

  componentDidMount() {
    this.getCartItems()
  }

  

  getCartItems=async()=>{
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://usha-sree-mangi-tasteego-app-backend.onrender.com/cartItems`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type':'application/json'
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options) 
    const fetchedData = await response.json()
    if (response.ok) {
      
      const {cartItems} = fetchedData 
      if(cartItems!==null){ 
      const {items} =cartItems
      console.log(items)
      this.setState({
        cartItemsList:items,
        apiStatus: apiStatusConstants.success,
      }) 
     }else{
      this.setState({ apiStatus: apiStatusConstants.failure,errorMsg:"No Items Found! Cart is Empty"})
     }

    }
    else  {
      const {message}=fetchedData
      this.setState({
        apiStatus: apiStatusConstants.failure,
        errorMsg:message
      })
    }
  }

  /*deleteCartItem=async(id)=>{
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
   
    const apiUrl = `https://usha-sree-mangi-tasteego-app-backend.onrender.com/removeCartItem`
    const jwtToken = Cookies.get('jwt_token')
    
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type':'application/json'
      },
      method: 'DELETE',
      body:JSON.stringify({foodItemId:id})
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      
      const {cartItems} = fetchedData 
     
     this.setState({
        cartItemsList:cartItems,
        apiStatus: apiStatusConstants.success,
      }) 
    }
    else{
      const {error}=fetchedData
      
      if (response.status === 404) {
       
        this.setState({
          apiStatus: apiStatusConstants.failure})

      } else if (response.status === 500) {
        alert(error)
       
        this.setState({
          apiStatus: apiStatusConstants.success})
      }
    }
  } */
    
    renderLoadingView = () => (
      <div className="products-loader-container">
        
         <ThreeDots color="#0b69ff" height="50" width="50" />
      </div>
    )
  

  renderFailureView = () => { 
    const {errorMsg}=this.state
    return ( <div className="product-details-failure-view-container">
       <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="failure-view-image"
      />
      <h1 className="product-not-found-heading">{errorMsg}</h1>
     
    </div>)
  }

  renderCartItems=()=>{
    const {cartItemsList}=this.state 
    const totalPrice=cartItemsList.reduce((acc,eachItem)=>acc+(eachItem.foodItemId.price*eachItem.quantity ), 0 ).toFixed(2)
      
    
    return(
      <div className='cart-container'>
      <p className='cart-heading'>Cart Items</p>
      
      <div className='cart-items-container'>
          {cartItemsList.map((eachItem)=>{
           
            return <CartItem deleteCartItem={this.deleteCartItem} key={eachItem._id} productId={eachItem.foodItemId._id} itemDetails={eachItem}/>
          })}
         
      </div>
      <div className='total_price-container'>
            <h1>Cart Total Price : {totalPrice}</h1>
          </div>
      </div>

    )

  }

  renderCart = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCartItems()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
       
        <div className="product-item-details-container">
          {this.renderCart()}
        </div>
      </>
    )
  }
}

export default Cart