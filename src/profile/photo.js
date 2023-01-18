import React from 'react'

function photo({props}) {
  return (
    <div style={{ backgroundColor:"black" , width: "200px" , height: "200px"}}>
     {props.nom}
     {props.children}
    </div>
  )
}

export default photo