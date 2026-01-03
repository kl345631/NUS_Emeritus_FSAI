import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout/layout'
import HomePage from './pages/HomePage'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* This is where the Home or About page will actually appear */}
        <AppRoutes /> 
    </Layout>
  )
}

export default App
