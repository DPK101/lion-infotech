import React from 'react'
import Navbar from './Navbar'
import './UserPage.scss'

export default function UserPage(props) {
  const { products } = props
  const columns = products[0] ? [...products[0]] : []
  const items = [...products.slice(1, products.length)]
  let itemCards = []

  items.forEach((itemArray, itemArrayIndex) => {
    let itemCard = {}
    columns.forEach((columnName, columnIndex) => {
      itemCard[columnName] = itemArray[columnIndex]
    })
    itemCards.push(itemCard);
  })

  console.log(itemCards)
  return (
    <div className="user-container">
      <Navbar />
      {itemCards.map((card, index) => {
        return (
          <div className="card">
            <div className="image-container">
              <img  className="image" src="laptop.jpg" alt="laptop" />
            </div>
            <div>
              <span>{card["Item name*"]}</span><br/>
              <span>Description: {card["Description"]}</span><br/>
              <span>Sale Price: {card["Sale Price"]}</span>
            </div>
            <hr/>
            <a href="tel:8125973157">Call us at +91-8125973157</a>
          </div>
        )
      })}
    </div>
  )
}