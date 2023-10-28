import React from 'react'

function Boos(props) {
  return (
   <div className="page d-flex">
   {props.children}
   </div>
  )
}

export default Boos