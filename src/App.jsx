
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductThunk } from './store/slices/products.slice'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/shared/Header'
import LoginPage from './pages/LoginPage'
import { getCartThunk } from './store/slices/cart.slice'
import CartPage from './pages/CartPage'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductThunk())
    dispatch(getCartThunk())
  }, [])
  

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductIdPage />}/>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      
    </div>
  )
}

export default App
