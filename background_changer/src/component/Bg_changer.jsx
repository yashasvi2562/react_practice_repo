import React, { useState } from 'react'

export default function Bg_changer() {

    let[color,setColor]=useState("pink")
    let[text_color,setTextColor]=useState("white")
  return (
    <div>
      <h1 style={{backgroundColor:color,color:text_color}}>This is my background changer.</h1>

    <div className="container flex flex-row gap-10 mt-5 justify-center">
        <button onClick={()=>(setColor("green"),setTextColor("white"))} className="bg-green-500">Green</button>
        <button onClick={()=>(setColor("yellow"),setTextColor("black"))} className="bg-yellow-500">Yellow</button>
        <button onClick={()=>(setColor("blue"),setTextColor("white"))} className="bg-blue-500">Blue</button>
    </div>
    </div>
  )
}
