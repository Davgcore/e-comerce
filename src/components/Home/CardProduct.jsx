import { useNavigate } from 'react-router-dom'
import './styles/CardProduct.css'
import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slice'

const CardProduct = ({ prod }) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigateDetail = () => {
        navigate(`/Product/${prod.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        dispatch(postCartThunk(prod))
    }

return (
    <article className="product" onClick={handleNavigateDetail}>
        <header className="product_header">
            <div className="product_img-container">
                <img className="product_img" src={prod.images[1].url} alt="" />
                
            </div>
            <div className="product_img-container">
                <img className="product_img" src={prod.images[0].url} alt="" />
            </div>
        </header>
        <section className="product_body">
            <header className="product_tittles">
                <h3 className="product_brand">{prod.brand}</h3>
                <h2 className="product_name">{prod.title}</h2>
            </header>
            <article className="product_price">
                <span className="product_price-label">Price</span>
                <h3 className="product_price-value">$ {prod.price}</h3>
            </article>
            <button className="product_btn" onClick={handleAddCart}></button>
            <button className="product_btn" onClick={handleAddCart}>
                <i className='bx bx-cart' ></i>
            </button>
        </section>
    </article>
)
}

export default CardProduct