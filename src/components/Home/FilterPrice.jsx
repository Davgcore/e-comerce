
const FilterPrice = () => {
  return (
    <article className="filter__price">
        <h3 className="filter__price-title">Price</h3>
        <form className="filter__price-form">
            <div className="filter__price-formElement">
                <label className="filter__price-label" htmlFor="from">From</label>
                <input className="filter__price-input" type="text" id="from" />
            </div>
            <div className="filter__price-formElement">
                <label className="filter__price-label" htmlFor="to">To</label>
                <input className="filter__price-input" type="text" id="to" />
            </div>
            <button className="filter__price-btn">Filter Prices</button>
        </form>
    </article>
  )
}

export default FilterPrice