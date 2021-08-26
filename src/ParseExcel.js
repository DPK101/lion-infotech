import React from 'react';
import convert from './convert';

const ParseExcel = () => {
  const fileHandler = event => {
    let fileObj = event.target.files[0];

    convert(fileObj, (err, resp) => {
      if (err) {
        console.log("Error occured: ", err)
      } else {
        console.log(resp)
      }
    })
  }
  return (
    <>
      <h2>Upload file</h2>
      <input type="File" onChange={fileHandler} />
    </>
  )
}

export default ParseExcel