import { useDispatch } from "react-redux"
import { deleteCartThunk } from "../../store/slices/cart.slice"
import cartElement from './styles/cartElement.css'

const CartElement = ({ prod }) => {

    const dispatch = useDispatch()

const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id))
}

  return (
    <article className="cart__element">
        <header className="cart__element-header">
            <img className="cart__element-header-img" src={prod.product.images[0].url} alt="" />
        </header>

        <section className="cart__element-section">
            <h3 className="cart__element-title">{prod.product.title}</h3>
            <p className="cart__element-p"><span className="cart__element-quantity">{prod.quantity}</span> x <span className="cart__element-amount">{prod.product.price}</span></p>
            <button 
                className="cart__element-btn"
                onClick={handleDelete}>
                <i style={{ fontSize: '2rem' }} className='bx bx-trash'></i>
            </button>
        </section>

        <footer className="cart__element-footer">
            <span className="cart__element-subtotal">Subtotal</span><span className="cart__element-total">{prod.quantity * prod.product.price}</span>
        </footer>
    </article>
  )
}

export default CartElement