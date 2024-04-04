import React from 'react'
import { useState } from 'react'


// let counter = 10;
//functional component
export default function Navbar() {

    //hook
   let[counter,setCounter]= useState(10)

    let addOne =()=>{
        counter=counter+1
        console.log(counter);
        setCounter(counter);
    }
    let subOne=()=>{
        console.log(counter);
        counter=counter-1;
        setCounter(counter);
    }
  return (
        <div>
            <h1>This is my navbar</h1>
            <h1>Count = {counter}</h1>
            <button onClick={addOne}>Add</button> <br /> <br />
            <button onClick={subOne}>Minus</button>
        </div>
  )
}
