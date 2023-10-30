import './styles/similarProducts.css'
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"
import CardProduct from "../Home/CardProduct";


const SimilarProducts = ({ product }) => {

    const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

    const [productsByCategory, getProductsByCategory] = useFetch(baseUrl);

    useEffect(() => {
        if (product) {
            getProductsByCategory(`/products?categoryId=${product.category.id}`)
        }

    }, [product]);

    console.log(productsByCategory);

    return (
        <div className="similar-products">
            <h3 className="similar-products__title">Discover Similar Products</h3>
            <div className="similar-products__list">
                {
                    productsByCategory?.map(prod => {
                        if (product.id !== prod.id) {
                            return (<CardProduct
                                key={prod.id}
                                prod={prod}
                                                               
                            />)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SimilarProducts