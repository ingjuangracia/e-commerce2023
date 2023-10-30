import './styles/productIdPage.css'
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductId/ProductInfo";
import SimilarProducts from "../components/ProductId/SimilarProducts";
import SliderImgs from "../components/ProductId/SliderImgs";


const ProductIdPage = () => {

    const { id } = useParams();

    const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

    const [product, getProductById] = useFetch(baseUrl)


    useEffect(() => {
        getProductById(`/products/${id}`);

    }, [id]);

    //console.log(product);

    return (
        <section className='ProductDetailsSection'>
            <div className="product-info">
                <SliderImgs
                    product={product}
                />
                <ProductInfo
                    product={product}
                />
            </div>
            <SimilarProducts
                product={product}
            />
        </section>
    )
};

export default ProductIdPage