import Product from "./Product";

function ProductList({ products, onAddFavorite }) {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onFavoriteClick={onAddFavorite}
        />
      ))}
    </>
  );
}

export default ProductList;
