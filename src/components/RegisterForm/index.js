import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect,Link} from 'react-router-dom'

import './index.css'

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    showApiStatusText: false,
    apiStatusText: '',
    showPassword :false
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
   
    history.replace('/login')
  }

  toggleShowPassword = () => {
    this.setState((prev) => ({showPassword : !prev.showPassword}))
  };


  onSubmitFailure = errorMsg => {
   
    this.setState({showApiStatusText: true,
      apiStatusText: errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    this.setState({showApiStatusText:true,
      apiStatusText:"verifying...."
    })
    const url = 'https://usha-sree-mangi-tasteego-app-backend.onrender.com/register'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.message)
    }
  }

  renderPasswordField = () => {
    const {password,showPassword } = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type={showPassword ? 'text':'password'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
        <div className='checkbox-container'>
            <input  className='password-checkbox'
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={this.toggleShowPassword}
                /> 
                Show Password
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showApiStatusText, apiStatusText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
       
        <img
          src="https://res.cloudinary.com/dtcogqxhp/image/upload/v1731406936/34496_bmaisu.jpg"
          className="login-form-img"
          alt="website logo"
        />
       
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>SignUp</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Register
          </button>
          {showApiStatusText && <p className="error-message">*{apiStatusText}</p>}
          <p className='account-note-text'>Already Have an account ? <Link className="highlight-text" to="/login"><span >Login here</span></Link></p>
        </form>
        </div>
     
    )
  }
}

export default RegisterForm