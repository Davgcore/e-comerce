
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductThunk } from './store/slices/products.slice'
import ProducIdPage from './pages/ProducIdPage'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductThunk())
  }, [])

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProducIdPage />} />
      </Routes>
    </div>
  )
}

export default App
