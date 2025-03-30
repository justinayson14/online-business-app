function ProductCard({product}) {

    function onToCartClick() {
        alert("clicked")
    }

    return <div className="product-card">
        <div className="product-image">
            <img src={null} alt={product.name} />
            <div className="product-overlay">
                <button className="toCart-btn" onClick={onToCartClick}>
                    +
                </button>
            </div>
        </div>
        <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    </div>
}

export default ProductCard