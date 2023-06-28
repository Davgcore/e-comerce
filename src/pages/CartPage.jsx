import { useSelector } from "react-redux"
import CartElement from "../components/cart/CartElement";
import Cart from './styles/Cart.css'

const CartPage = () => {

    const cart = useSelector(states => states.cart)

    const totalPrice = cart.reduce((acc, cv) => {
      const subtotal = cv.quantity * cv.product.price
      return acc + subtotal
    }, 0)


  return (
    <div>
        <h2>Cart</h2>
        <div>
          {
            cart.map(prod => (
              <CartElement 
                key={prod.id}
                prod={prod}
              />
            ))
          }
        </div>
        <footer>
          <div>
            <span>Total:</span><span>{totalPrice}</span>
          </div>
        </footer>
    </div>
  )
}

export default CartPage