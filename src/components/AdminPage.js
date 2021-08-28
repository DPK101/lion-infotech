import React from 'react'
import './AdminPage.scss'
import convert from '../convert'

class AdminPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products.length !== this.state.products.length) {
      this.props.uploadProducts(this.state.products)
    }
  }

  render() {
    const { products } = this.props
    const fileHandler = event => {
      let fileObj = event.target.files[0];
      convert(fileObj, (err, resp) => {
        if (err) {
          console.log("Error occured: ", err)
        } else {
          this.setState({
            products: resp?.items
          })
        }
      })
    }
    return (
      <div className="admin-container" >
        <h1>Admin Panel</h1>
        <div className="upload-window">
          <div className="upload-excel">
            <div className="upload-tile">Upload Excel file</div>
            <div className="upload-button"><input type="File" onChange={fileHandler} /></div>
          </div>
          <div className="table-container">
            {products.map((row, index) => {
              return (<div key={index} className="row">{
                row.map((element, idx) => {
                  return <div key={idx} className="element">{element ? element : 'NA'}</div>
                })}</div>)
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default AdminPage