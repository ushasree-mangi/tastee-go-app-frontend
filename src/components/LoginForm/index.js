import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showApiStatusText: false,
    apiStatusText: '',
    showPassword:false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showApiStatusText: true,
      apiStatusText: errorMsg})
  }

  toggleShowPassword = () => {
    this.setState((prev) => ({showPassword : !prev.showPassword}))
  };

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    this.setState({showApiStatusText:true,
      apiStatusText:"verifying...."
    })
    const url = 'https://usha-sree-mangi-tasteego-app-backend.onrender.com/login'
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
      this.onSubmitSuccess(data.token)
    } else {
      this.onSubmitFailure(data.message)
    }
  }

  renderPasswordField = () => {
    const {password,showPassword} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
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
          src="https://res.cloudinary.com/dtcogqxhp/image/upload/v1731405927/neat_emmapharaoh_19march24_12_iiqpmb.jpg"
          className="login-form-img"
          alt="website logo"
        />
        <form className="form-container" onSubmit={this.submitForm}>
           <h1>Login</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showApiStatusText && <p className="error-message">*{apiStatusText}</p>}
          <p className='account-note-text'>Don't have an account ? <Link to="/register" className="highlight-text"><span >Register here</span></Link></p>
        </form>
      </div>
    )
  }
}

export default LoginForm