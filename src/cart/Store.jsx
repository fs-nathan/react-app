import { useState, useEffect, useCallback } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const DEFAULT_PRODUCTS = [
  { id: 1, name: "iPhone 17", price: 25000000, category: "Phone" },
  { id: 2, name: "MacBook Air", price: 30000000, category: "Laptop" },
  { id: 3, name: "AirPods Pro", price: 6500000, category: "Audio" },
  { id: 4, name: "Samsung Galaxy", price: 22000000, category: "Phone" },
  { id: 5, name: "Dell XPS", price: 28000000, category: "Laptop" },
  { id: 6, name: "Sony WH-1000XM6", price: 9000000, category: "Audio" },
];

const CATEGORIES = [
  { id: 0, name: "All" },
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Audio" },
];

function Store() {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState("");

  const handleAddFavorite = useCallback((productId) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, isFavorite: !item.isFavorite }
          : item,
      ),
    );
  }, []);

  useEffect(() => {
    if (!search && !category && !price) {
      setProducts(DEFAULT_PRODUCTS);
      return;
    }

    let filteredProducts = [...DEFAULT_PRODUCTS];
    if (search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category && category !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === category,
      );
    }

    if (price) {
      filteredProducts = filteredProducts.filter((item) => item.price >= price);
    }

    setProducts(filteredProducts);
  }, [search, price, category]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: 0,
        flexDirection: "row",
      }}
    >
      <div style={{ flex: 1, border: "1px solid white" }}>
        <ProductList products={products} onAddFavorite={handleAddFavorite} />
      </div>

      {/* filters */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* search input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            height: "40px",
            fontSize: "20px",
          }}
          placeholder="Search products"
        />

        {/* category filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            height: "56px",
            fontSize: "20px",
          }}
        >
          {CATEGORIES.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {/* filter by price > 25000000 */}
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Tìm theo sản phẩm lớn hơn mức giá"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            height: "40px",
            fontSize: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default Store;
