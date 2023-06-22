import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';

const Home = () => {

    const products = useSelector(states => states.products)

    return (
        <div>
            <h1>home</h1>
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