import './styles/filterCategory.css'
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "../../store/slices/products.slice";


const FilterCategory = ({ isPriceDataVisible }) => {

    const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

    const [categories, getAllCategories] = useFetch(baseUrl);

    const [isAccordionCategVisible, setIsAccordionCategVisible] = useState(true);


    useEffect(() => {
        getAllCategories("/categories")

    }, []);

    const dispatch = useDispatch();

    const handleFilterCategory = (id) => {
        if (id) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
            dispatch(getAllProductsThunk(url))
        } else {
            dispatch(getAllProductsThunk())
        }
    };

    const toggleCategAccordion = () => {
        setIsAccordionCategVisible(!isAccordionCategVisible);
    }

    const categoryStyle = {
        marginTop: isPriceDataVisible ? '0px' : '-200px', // Desplaza hacia arriba cuando se ocultan datos en FilterPrice
        transition: 'margin 0.6s',
      };


    return (
        <article className="filterCategory-container" style={categoryStyle}>
            <h3 onClick={toggleCategAccordion}>
                Category{" "}
                <i className={`bx ${isAccordionCategVisible ? "bx-chevron-down" : "bx-chevron-up"}`}></i>
            </h3>
            {
                isAccordionCategVisible && (
                    <ul className="category-list">
                        <li className="category-item" onClick={() => handleFilterCategory()}>All Categories</li>
                        {
                            categories?.map(category => (
                                <li
                                    onClick={() => handleFilterCategory(category.id)}
                                    key={category.id}
                                    className="category-item"
                                >
                                    {category.name}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </article>
    )
}

export default FilterCategory