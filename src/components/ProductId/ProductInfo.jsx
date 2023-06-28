import { useState } from "react"
import { postCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"


const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(state => state - 1)
        }
    }

    const handleAdd = () => setQuantity(state => state + 1)

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(postCartThunk(product, quantity))
    }


  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <ul>
                <li>
                    <span>Price</span>
                    <span>{product?.price}</span>
                </li>
                <li>
                    <span>Quantity</span>
                    <div>
                        <div onClick={handleMinus}>-</div>
                        <div>{quantity}</div>
                        <div onClick={handleAdd}>+</div>
                    </div>
                </li>
            </ul>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </footer>
    </article>
  )
}

export default ProductInfo