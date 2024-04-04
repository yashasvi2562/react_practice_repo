import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardOne } from './components/CardOne'



let laptop_names=["Lenovo","Dell","Mac"];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline"> This is CardOne. </h1>
      <br />
      {
      laptop_names.map((e)=>(
        <CardOne username={e}/>
      ))
    }
    </>
  )
}

export default App
