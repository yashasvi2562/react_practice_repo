import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bg_changer from './component/Bg_changer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bg_changer/>
    </>
  )
}

export default App
