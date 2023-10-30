import './styles/cartElement.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slices/cart.slice"


const CartElement = ({ prod }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCartThunk(prod.id));

    }

    return (
        <article className="cart__item">
            <header className="cart__item-header">
                <img className="cart__item-image" src={prod.product.images[0].url} alt="" />
            </header>
            <section className="cart__item-info">
                <h3 className="cart__item-title">{prod.product.title}</h3>
                <p>
                    <span className="cart__item-subtotal-label"><strong>Subtotal: </strong>$</span>
                    <span className="cart__item-subtotal">{prod.quantity * parseInt(prod.product.price)}</span>
                </p>
            </section>
            <section className="cart__item-value">
                <p className="cart__item-quantity-price">
                    <span className='cart__item-quantity'>{prod.quantity}</span> x{' '}
                    <span className="cart__item-price">{parseInt(prod.product.price)}</span>
                </p>
            </section>
            <section className="cart__item-button">
                <i className="bx bx-trash" onClick={handleDelete}></i>
            </section>
        </article>
    )
}

export default CartElement