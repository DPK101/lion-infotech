import React from 'react'
import './UserPage.scss'

export default function UserPage(props) {
  const { products } = props
  const columns = [...products[0]]
  const items = [...products.slice(1, products.length)]
  let itemCards = []
  let itemCarObj = {}

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
      {itemCards.map((card, index) => {
        return (
          <div className="card">
            <h3>Name: {card["Item name*"]}</h3>
            <h2>Tax Rate: {card["Tax Rate"]}</h2>
          </div>
        )
      })}
    </div>
  )
}