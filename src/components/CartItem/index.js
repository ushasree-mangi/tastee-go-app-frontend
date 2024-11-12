import {Component} from 'react'
import {Link} from 'react-router-dom'
// import { MdDelete } from "react-icons/md";

import './index.css'
class CartItem extends Component {

   state={isClickedOnDelete:false}
    
   /* onDeleteCartItem=()=>{
        const {productId}=this.props
        this.setState((prev)=>({isClickedOnDelete:!prev.isClickedOnDelete}))
        const {deleteCartItem}=this.props
        deleteCartItem(productId)

    } */

    render(){ 
        const {productId, itemDetails}=this.props  
        const {quantity }=itemDetails 
        const {name , url ,price}=itemDetails.foodItemId
        return(
            <div className='cart-item-container'>

                <Link to={`/products/${productId}`} className='img-details-container'>

                <img alt="product" src={url}/>
                <div>
                    <p className='cart-item-name'>{name}</p>
                    
                    <p className='cart-item-price'>Price : {price}</p>
                    <p className='cart-item-quantity'>Quantity : {quantity}</p>
                    <p className='cart-item-total-price'>Total Price : {price*quantity}</p>
                </div>
                </Link >
              {/* <div className='delete-icon'>
                    <button className='delete-button' type="button" onClick={this.onDeleteCartItem}>
                        <MdDelete style={{ fontSize: '25px' }}/>
                    </button>
                
                </div> */}
            </div>
        ) 
    }

}

export default CartItem