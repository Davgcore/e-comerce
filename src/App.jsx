
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductThunk } from './store/slices/products.slice'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductThunk())
  }, [])

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <h1>HOLA SOY LAURA</h1>
    </div>
  )
}

export default App
