import React, { useEffect, useState } from 'react'

export default function Effects() {
    const[count,setCount] =useState(0);

    useEffect (() =>{
        if(count>=1){
       document.title =`React(${count})`
    }
    else{
        document.title =`React`
    }
    })
  return (
    <div>
   <h1  className="mx-3">faisal</h1>
   <button className="btn btn-danger mx-3 my-3" onClick={()=> setCount(count+1)} >update</button>

    </div>
  )
}

