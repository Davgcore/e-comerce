import { useDispatch } from "react-redux"
import { deleteCartThunk } from "../../store/slices/cart.slice"

const CartElement = ({ prod }) => {

    const dispatch = useDispatch()

const handleDelete = () => {
    dispatch(deleteCartThunk(prod.id))
}

  return (
    <article>
        <header>
            <img src={prod.product.images[0].url} alt="" />
        </header>

        <section>
            <h3>{prod.product.title}</h3>
            <p><span>{prod.quantity}</span> x <span>{prod.product.price}</span></p>
            <button onClick={handleDelete}>
                <i style={{ fontSize: '2rem' }} className='bx bx-trash'></i>
            </button>
        </section>

        <footer>
            <span>Subtotal</span><span>{prod.quantity * prod.product.price}</span>
        </footer>
    </article>
  )
}


const CartElement = ({prod}) => {
    console.log(prod);
    return (
        <article>
            <header>
                <img src={prod.product.images[0].url} alt="" />
            </header>
            <section>
                <h3>{prod.product.title}</h3>
                <p><span>{}prod.quantity</span> x <span>{prod.product.price}</span></p>
                <span>
                <i className='bx bx-trash'></i>
                </span>
            </section>
            <footer>
                <span>Subtotal</span><span>{prod.quantity * prod.product.price}</span>
            </footer>
        </article>

    )
}

export default CartElement
export default CartElement