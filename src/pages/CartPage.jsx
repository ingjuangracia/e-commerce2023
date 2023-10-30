import './styles/cartPage.css'
import { useSelector } from "react-redux"
import CartElement from "../components/cart/CartElement";
import usePurchases from "../hooks/usePurchases";

const CartPage = () => {

  const cart = useSelector(states => states.cart);

  const totalPrice = cart.reduce((acc, cv) => {
    const subTotal = cv.quantity * cv.product.price
    return acc + subTotal;

  }, 0);

  const { makePurchase } = usePurchases();


  const handlePurchase = () => {
    makePurchase()
  };

  return (
    <section className="cart">
      <h2 className="cart__title">My Cart</h2>
      <div className="cart__items">
        {
          cart.map(prod => (
            <CartElement
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <footer className="cart__footer">
        <div className="cart__total">
          <span><strong>Total:</strong> $</span><span>{parseInt(totalPrice)}</span>
        </div>
        <button className="cart__purchase-button" onClick={handlePurchase}>Purchase This Cart</button>
      </footer>

    </section>
  )
}

export default CartPage