import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ProductCard from '../ProductCard'

import './index.css'



const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Products extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    showErrorMsg:false,
    errorMsg:""
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    
    const apiUrl = 'https://usha-sree-mangi-tasteego-app-backend.onrender.com/foodItems'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
   
    if (response.ok) {
      
      const updatedData = data 
      
      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      const {message}=data
      this.setState({
        apiStatus: apiStatusConstants.failure,
        showErrorMsg:true,
        errorMsg:message
      })
    }
  }

  

  


  renderFailureView = () => { 

    const {showErrorMsg,errorMsg}=this.state 

    return( 
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
     {showErrorMsg&&<p>{errorMsg}</p>} 
    </div>
    )
  }

  renderProductsListView = () => {
    const {productsList} = this.state
    
    return  (
      <div className="all-products-container">
        <img className='food-app-banner' src="https://res.cloudinary.com/dtcogqxhp/image/upload/v1731335392/1000_F_817832828_O89fMUNWbLa6bIoWlJSbVzdBW3T8Rn7d_lgzjp5.jpg" alt="banner"/>
        <div className='products-container'>
            <h1 className='products-heading'>All Food Items</h1>
            <ul className="products-list">
              {productsList.map(product => (
                <ProductCard productData={product} key={product._id} />
              ))}
            </ul>
        </div>
      </div>
    ) 
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      
       <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
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
      <div className="all-products-section">
       
        {this.renderAllProducts()}
      </div>
    )
  }
}

export default Products