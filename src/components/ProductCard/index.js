import {Link} from 'react-router-dom'

import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {name,  url, price, _id} = productData 

  const imgStyle = {
    width: '70%',
    height: '300px',
    borderRadius: '10px',
    alignSelf:'center'
  };

  return (
    <li className="product-item" >
     <Link to={`/products/${_id}`} className="link-item">
        <img src={url} id="thumbnail"  alt="product" style={imgStyle} />
        
        <h1 className="title">{name}</h1>  
          <p className="price">Rs {price}/-</p>
      </Link> 
    </li>
  )
}
export default ProductCard