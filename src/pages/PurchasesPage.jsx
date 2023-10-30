import './styles/purchasesPage.css'
import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import PurchaseCard from "../components/Purchases/PurchaseCard";


const PurchasesPage = () => {

  const { purchases, getAllPurchases } = usePurchases();

  useEffect(() => {
    getAllPurchases();
  }, []);


  return (
    <section className="purchases">
      <h2 className="purchases__title">My Purchases</h2>
      <div className="purchases__list">
        {
          purchases?.map(prod => (
            <PurchaseCard
              key={prod.id}
              prod={prod}
            />

          ))
        }
      </div>
    </section>

  )
};

export default PurchasesPage