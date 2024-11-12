import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import { useState } from 'react';
import './index.css'   

const Navbar=()=>{  

    
    const [isLogout, setIsLogout] = useState(false);

    const onLogout=(props)=>{
        
        Cookies.remove('jwt_token')  

        setIsLogout(true);
        
        
    }

    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
    <div className="container navbar-content-container">
    <a className="navbar-brand" href="/">
        <p  className="app-name">TasteeGo</p> 
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
            <a className="nav-link active" id="navItem1" href="/">
                Home
                <span className="sr-only"></span>
            </a>
            <a className="nav-link" href="/products" id="navItem2">Food Items</a>
            <a className="nav-link" href="/cart" id="navItem3">Cart</a>
            <a className="nav-link" href="/register" id="navItem4">Register</a>
            <a className="nav-link" href="/login" id="navItem4">Login</a>
           <button type="button" onClick={onLogout} className='logout-btn'>
                      Logout
            </button> 
            {isLogout&& <Redirect to="login" />}
        </div>
    </div>
</div>
</nav>
    )
}
export default Navbar