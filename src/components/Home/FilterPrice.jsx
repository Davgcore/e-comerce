import { useState } from "react"
import { useForm } from "react-hook-form"

const FilterPrice = ({ setPriceMinMax, priceMinMax }) => {

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    const min = data.from.trim() === "" ? 0 : +data.from
    const max = data.to.trim() === "" ? Infinity : +data.to

    setPriceMinMax({ min, max })
  }

  const handleClearFilter = () => {
    setPriceMinMax({min: 0, max: Infinity})
    reset({
      from: "",
      to: ""
    })
  }

  return (
    <article className="filter__price">
        <h3 className="filter__price-title">Price</h3>
        <form onSubmit={handleSubmit(submit)} className="filter__price-form">
            <div className="filter__price-formElement">
                <label className="filter__price-label" htmlFor="from">From</label>
                <input {...register('from')} className="filter__price-input" type="number" id="from" />
            </div>
            <div className="filter__price-formElement">
                <label className="filter__price-label" htmlFor="to">To</label>
                <input {...register('to')} className="filter__price-input" type="number" id="to" />
            </div>
            <button className="filter__price-btn">Filter Prices</button>
        </form>
        
        {
          priceMinMax.min !== 0 || priceMinMax !== Infinity
          ? <p>From {priceMinMax.min} to {priceMinMax.max} <b onClick={handleClearFilter}>X</b> </p>
          : ''
        }
        
    </article>
  )
}

export default FilterPrice