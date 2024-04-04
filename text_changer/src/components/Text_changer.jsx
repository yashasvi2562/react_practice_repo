import React, { useRef, useState } from 'react'

export default function Text_changer() {

        let [text,setText]=useState("This is my text.")
        let ref = useRef(null)

  return (
    <div>
    <h1 id="h128">{text}</h1> 
    <br/>
    <input type="text " name="asdh" id="text28" ref={ref} style={{backgroundColor:"pink", padding:"5px"}} />
    <br/>
    <button onClick={() => setText(ref.current.value)}>Enter</button>
    </div>
  )
}