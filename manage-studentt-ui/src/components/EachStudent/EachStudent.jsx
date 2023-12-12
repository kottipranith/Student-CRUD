import React from 'react'
import "./EachStudent.css"
const EachStudent = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.address}</td>
    </tr>
  )
}

export default EachStudent