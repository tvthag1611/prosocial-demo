import React, { useState, useEffect } from 'react'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../redux/action-creators/home'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  const { isLogged } = useSelector(state => state.homeReducer)
  

  const dispatch  = useDispatch()

  const handleErrorLogin = (res) => {
    if (res === 401) {
      setError('Tài khoản hoặc mật khẩu sai!')
    }
  }

  const loginSystem = () => {
    dispatch(Actions.updateLogin({
      username,
      password
    })).then(res => handleErrorLogin(res))
  }

  useEffect(() => {
    dispatch(Actions.updatePreloader())
  }, [])

  return (
    <div className="login">
      <img src="/img/ProPTIT-logo.png" />
      <h4>Đăng nhập</h4>
      <div className="form-group">
        <input
          type="text"
          className={username !== '' ? 'form-control' : 'form-control is-invalid'}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        <div className="invalid-feedback">
          Vui lòng điền Username
        </div>
      </div>
      <div className="form-group show-pass-form">
        <input
          type={showPassword ? 'text' : 'password'}
          className={password !== '' ? 'form-control' : 'form-control is-invalid'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        <div className="invalid-feedback">
          Vui lòng điền mật khẩu
        </div>
        {showPassword ?
          <i className="fas fa-eye show-pass" aria-hidden="true"
            onClick={() => setShowPassword(false)}
          ></i>
          :
          <i className="fa fa-eye-slash show-pass" aria-hidden="true"
            onClick={() => setShowPassword(true)}
          ></i>
        }        
      </div>
      <button
        type="button"
        className="login-system"
        onClick={loginSystem}
      >
        Login
      </button>
        <small className="feedback-login">
          {error}
        </small>
    </div>
  )
}
