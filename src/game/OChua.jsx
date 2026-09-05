import { useEffect, useState } from "react";

function OChua({ onClick, isKhoBau, index }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button style={{ fontSize: 40, cursor: "pointer" }} onClick={handleClick}>
        {!isClicked ? "?" : isKhoBau ? "Đúng" : "Sai"}
      </button>
      <div style={{ textAlign: "center", fontSize: 18 }}>{index + 1}</div>
    </div>
  );
}

export default OChua;
