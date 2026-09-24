import React, { useEffect } from "react";

function Product({ product, onFavoriteClick }) {
  useEffect(() => {
    console.log("Product component rendered", product);
  }, [product]);
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
        onClick={() => onFavoriteClick(product.id)}
      >
        {product.isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
}

export default Product; //= React.memo(Product);
