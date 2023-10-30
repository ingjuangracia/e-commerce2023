import './styles/filterPrice.css'
import { useState } from "react";
import { useForm } from "react-hook-form"


const FilterPrice = ({ priceMinMax, setPriceMinMax, handleToggleData }) => {

    const { register, reset, handleSubmit } = useForm();

    const [isAccordionPriceVisible, setIsAccordionPriceVisible] = useState(true);
  
    
    const submit = data => {
        const min = data.from.trim() === "" ? 0 : +data.from;
        const max = data.to.trim() === "" ? Infinity : +data.to

        setPriceMinMax({ min, max })
    };

    const handleClearFilter = () => {
        setPriceMinMax({ min: 0, max: Infinity })
        reset({
            from: "",
            to: ""
        })

    }

    const togglePriceAccordion = () => {
        setIsAccordionPriceVisible(!isAccordionPriceVisible);
        handleToggleData();
    }

    

    return (
        <article className="filterPrice-container">
            <h3 onClick={togglePriceAccordion}>
                Price{" "}
                <i className={`bx ${isAccordionPriceVisible ? "bx-chevron-down" : "bx-chevron-up"}`}></i>
            </h3>
            {
                isAccordionPriceVisible && (
                    <form onSubmit={handleSubmit(submit)} className="form-container">
                        <div className="form-field">
                            <label htmlFor="from" className="form-label">From </label>
                            <input {...register("from")} type="number" id="from" className="form-input" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="to" className="form-label">To </label>
                            <input {...register("to")} type="number" id="to" className="form-input" />
                        </div>
                        <button className="form-button">Filter Price</button>
                    </form>
                )
            }
            {
                priceMinMax.min !== 0 || priceMinMax.max !== Infinity
                    ? <p>From {priceMinMax.min} to {priceMinMax.max} <b onClick={handleClearFilter}>X</b></p>
                    : ""
            }

        </article>
    )
}

export default FilterPrice