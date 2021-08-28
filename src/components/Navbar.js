import React from 'react'
import './Navbar.scss'

export default function () {
  return (
    <div className="nav-container">
      <div>Products</div>
      <div className="right-section">
        <div>Profile</div>
        <div>Cart</div>
      </div>
    </div>
  )
}