import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import './styles/Home.css'

const Home = () => {

    const products = useSelector(states => states.products)

    return (
        <div>
            <div className='prducts_container'>
                {
                    products?.map(prod => (
                        <CardProduct 
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home