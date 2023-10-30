import './styles/home.css'
import { useSelector } from "react-redux"
import CardProduct from "../components/Home/CardProduct"
import { useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";



const Home = () => {

  const products = useSelector(states => states.products);

  const [inputValue, setInputValue] = useState("");

  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity
  });

  const [isPriceDataVisible, setIsPriceDataVisible] = useState(true);

  const handleSearchName = e => {
    setInputValue(e.target.value.toLowerCase());

  };

  const cbFilter = prod => prod.title.toLowerCase().includes(inputValue);

  const cbFilterPrice = prod => {
    const condicMin = priceMinMax.min <= prod.price;
    const condicMax = prod.price <= priceMinMax.max;
    return condicMin && condicMax

  }

  const handleToggleData = () => {
    setIsPriceDataVisible(!isPriceDataVisible);
  }


  return (
    <div className="home-container">
      <aside className="sidebar">
        <FilterPrice
          priceMinMax={priceMinMax}
          setPriceMinMax={setPriceMinMax}
          handleToggleData={handleToggleData}
        />
        <FilterCategory
          isPriceDataVisible={isPriceDataVisible}
        />
      </aside>

      <section className="main__content">
        <div className='main__content-input'>
          <input className="main__content-input-search"
            value={inputValue}
            onChange={handleSearchName}
            type="text"
            placeholder="What are you looking for ? Type brand or reference"
          />
        </div>

        <div className="main__content-product">
          {
            products?.filter(cbFilter).filter(cbFilterPrice).map(prod => (
              <CardProduct
                key={prod.id}
                prod={prod}
              />

            ))
          }
        </div>
      </section>

    </div>

  )
}

export default Home
