import React from 'react'

function Profilee( props) {
console.log(props) 
   return (
    <div>
<h1>{props.person.FullName}</h1>
<h1>{props.person.Bio}</h1>
<h1>{props.person.profes}</h1>
<button onclick={()=>props.handleName(props.person.FullName)}>Click here to know name</button>
{props.children}
    </div>
  )
}

export default Profilee;