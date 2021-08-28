import React from 'react';
import convert from '../convert';
import './ParseExcel.css'
class ParseExcel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      mappedData: []
    }
  }
  render() {
    const fileHandler = event => {
      let fileObj = event.target.files[0];
      convert(fileObj, (err, resp) => {
        if (err) {
          console.log("Error occured: ", err)
        } else {
          this.setState({
            data: resp?.items
          })
        }
      })
    }
    return (
      <div>
        <input type="File" onChange={fileHandler} />
        <div className="table-container">
          {this.state.data.map((row, index) => {
            return (<div key={index} className="row">{
              row.map((element, idx) => {
              return <div key={idx} className="element">{element ? element : 'NA'}</div>
            })}</div>)
          })}
        </div>
      </div>
    )
  }
}

export default ParseExcel