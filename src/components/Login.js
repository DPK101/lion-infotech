import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Login.scss'

export default function Login(props) {
  const [userType, setUserType] = useState('')
  const handleChange = e => {
    console.log(e.target.value)
    props.saveUserType(e.target.value)
    setUserType(e.target.value)
  }
  const history = useHistory()

  return (
    <div className="main-container">
      <div className="left">
       <h1 className="company">Lion Infotech</h1>
      </div>
      <div className="right">
        <div className="login-container">
          <div>
            <h1>Login</h1>
            <hr />
          </div>
          <div className="user-types">
            <input type="radio" name="type" onChange={handleChange} value="admin" /><span className="user-type">Admin</span>
            <br/>
            <input type="radio" name="type" onChange={handleChange} value="user" /><span className="user-type">User</span>
          </div>
          <button className="submit-button" value="Submit" onClick={() => {
            userType === 'admin' ? history.push('/admin') : history.push('/user')
          }}>Submit</button>
        </div>
      </div>
    </div>
  )
}