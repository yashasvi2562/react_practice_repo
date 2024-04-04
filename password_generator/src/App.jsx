import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Password_generator from './component/Password_generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Password Generator.</h1>
      <Password_generator/>
    </>
  )
}

export default App
