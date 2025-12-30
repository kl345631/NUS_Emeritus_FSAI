import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout/layout'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default App
