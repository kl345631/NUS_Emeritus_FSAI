import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './Component/ToggleButton'
import ColorChanger from './Component/ColorChanger'
import UserProfile from './Component/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ToggleButton/>
        <ColorChanger/>
        <UserProfile/>
      </div>
    </>
  )
}

export default App
