import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import FilterCategory from '../components/Home/FilterCategory';
import FilterPrice from '../components/Home/FilterPrice';


const Home = () => {

    const [inputValue, setInputValue] = useState("")
    const [priceMinMax, setPriceMinMax] = useState({
        min: 0,
        max: Infinity
    })

    const products = useSelector(states => states.products)
    

    const handleSearchName = (e) => {
        setInputValue(e.target.value.toLowerCase())
    }

 const cbFilter = prod => prod.title.toLowerCase().includes(inputValue)

const cbFilterPrice = prod => {
    const condMin = priceMinMax.min <= prod.price
    const condMax = prod.price <= priceMinMax.max
    return condMin && condMax
}



    return (
        <div className='home'>
            <input className='home__input' value={inputValue} onChange={handleSearchName} type="text" />
            <aside className='home__aside'>
                <FilterPrice 
                    setPriceMinMax={setPriceMinMax} 
                    priceMinMax={priceMinMax}
                />
                <FilterCategory />
            </aside>
            <div className='home__products'>
                {
                    products?.filter(cbFilter).filter(cbFilterPrice).map((prod) => (
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