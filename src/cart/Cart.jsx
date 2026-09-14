import { useEffect } from "react";

function Cart({ products, onReduceQuantity, onAddToCart }) {
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "50%",
        border: "1px solid green",
        alignItems: "center",
      }}
    >
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid red",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h3>Tên sản phẩm: {item.name}</h3>
          <p>Giá: {item.price}</p>

          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <button
              style={{
                width: "30px",
                padding: "10px",
                border: "1px solid black",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => onReduceQuantity(item)}
            >
              -
            </button>
            <p>Số lượng: {item.quantity}</p>
            <button
              style={{
                width: "30px",
                padding: "10px",
                border: "1px solid black",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => onAddToCart(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div>
        Tổng tiền:{" "}
        {products.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        )}
      </div>
    </div>
  );
}

export default Cart;
