import './styles/purchaseCard.css'

const PurchaseCard = ({ prod }) => {

  console.log(prod)

  const formattedDate = new Date(prod.createdAt).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = new Date(prod.createdAt).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <article className="purchase-card">
      <div className="purchase-card__img">
        <img src={prod.product.images[0].url} alt="" />
      </div>
      <div className="purchase-card__product-info">
        <h3 className="purchase-card__title">{prod.product.title}</h3>
        <p className="purchase-card__date-time">{formattedDate} {formattedTime}</p>
      </div>
      <div className="purchase-card__details">
        <p className="purchase-card__quantity-price">
          <span>{prod.quantity} x {parseInt(prod.product.price)}</span>
        </p>
        <p className="purchase-card__total-price">
          <span><strong>Total: </strong>${prod.quantity * prod.product.price}</span>
        </p>
      </div>
    </article>
  )
}

export default PurchaseCard