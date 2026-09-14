import { useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const DEFAULT_PRODUCTS = [
  { id: 1, name: "Áo phông trắng", price: 100000 },
  { id: 2, name: "Áo phông xanh", price: 200000 },
  { id: 3, name: "Áo phông đen", price: 300000 },
  { id: 4, name: "Áo phông tím", price: 400000 },
  { id: 5, name: "Áo phông vàng", price: 500000 },
];

/**
 * [
 * {
 *  id: 1,
 *  name: "Áo phông trắng",
 *  price: 100000,
 *  quantity: 1,
 * }
 * ]
 *
 */

function Store() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToCart = (product) => {
    // kiem tra xem product da co trong cart hay chua
    if (selectedProducts.find((item) => item.id === product.id)) {
      setSelectedProducts(
        selectedProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const handleReduceQuantity = (product) => {
    const foundProduct = selectedProducts.find(
      (item) => item.id === product.id,
    );

    if (foundProduct.quantity === 1) {
      setSelectedProducts(
        selectedProducts.filter((item) => item.id !== product.id),
      );
    } else {
      setSelectedProducts(
        selectedProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: 0,
        flexDirection: "row",
      }}
    >
      <ProductList products={DEFAULT_PRODUCTS} onAddToCart={handleAddToCart} />
      <Cart
        products={selectedProducts}
        onReduceQuantity={handleReduceQuantity}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default Store;
