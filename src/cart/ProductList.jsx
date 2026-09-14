import Product from "./Product";

function ProductList({ products, onAddToCart }) {
  return (
    <div style={{ width: "50%", border: "1px solid white" }}>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
