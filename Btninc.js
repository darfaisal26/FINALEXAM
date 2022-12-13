import React, { useState } from 'react'

export default function Btninc() {
    const [count,setCount]=useState(0);
    const IncNumber =()=>{
        setCount(count+1);
    }
  return (
    <div>
      


      <h1>you clicked {count} times this button</h1>
      <button onClick={IncNumber} className="btn btn-danger"> click me</button>
    </div>
  )
}
