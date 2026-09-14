function Product({ product, onAddToCart }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "18px",
      }}
    >
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>

      {/* button add to cart */}
      <button
        style={{
          padding: "10px",
          border: "1px solid white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => onAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
