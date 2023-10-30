import './styles/productInfo.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCartThunk } from "../../store/slices/cart.slice";

const ProductInfo = ({ product }) => {

    console.log(product);

    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity - 1);
        }
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(postCartThunk(product, quantity));

    };


    return (
        <article className="product__info-container">
            <h3 className="product__info-brand">{product?.brand}</h3>
            <h2 className="product__info-title">{product?.title}</h2>
            <p className="product__info-description">{product?.description}</p>
            <footer className="product__info-footer">
                <ul className="product__info-list">
                    <li className="product__info-item-price">
                        <h4><span className="product__info-label">Price </span></h4>
                        <p><strong className="product__info-value">$ {parseInt(product?.price)}</strong></p>
                    </li>
                    <li className="product__info-item-quantity">
                        <h4><span className="product__info-label">Quantity</span></h4>
                        <div className="product__info-quantity-controls">
                            <div className="product__info-quantity-increaseDecrease" onClick={handleMinus}>-</div>
                            <div className="product__info-quantity-value">{quantity}</div>
                            <div className="product__info-quantity-increaseDecrease" onClick={handleAdd}>+</div>
                        </div>
                    </li>
                </ul>
                <button className="product__info-add-button" onClick={handleAddToCart}><strong>Add to Cart</strong><i className='bx bx-cart'></i></button>
            </footer>

        </article >
    )
}

export default ProductInfo