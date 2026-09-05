import { useEffect, useState } from "react";
import OChua from "./OChua";

function KhoBau({ array, onExit }) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [count, setCount] = useState(0);

  const correctIndexes = [];
  array.forEach((item, index) => {
    if (item === 1) {
      correctIndexes.push(index);
    }
  });

  const onBoxSelect = (index) => {
    if (selectedIndexes.includes(index)) {
      return;
    }
    setSelectedIndexes([...selectedIndexes, index]);
    setCount((prev) => {
      if (prev < 5) return prev + 1;
      return prev;
    });
  };

  useEffect(() => {
    if (correctIndexes.every((index) => selectedIndexes.includes(index))) {
      alert("Bạn đã đoán đúng tất cả các ô kho báu. Bạn đã thắng!");
    } else if (count === 5) {
      alert(
        "Bạn đã đoán sai 5 lần. Bạn đã thua! Vị trí đúng là: " +
          correctIndexes.map((index) => index + 1).join(", "),
      );
    }
  }, [count, onExit]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: 10,
        }}
      >
        {array.map((item, index) => {
          return (
            <OChua
              key={index}
              onClick={() => onBoxSelect(index)}
              isKhoBau={correctIndexes.includes(index)}
              index={index}
            />
          );
        })}
      </div>
      <div style={{ textAlign: "center", fontSize: 32 }}>
        Số lượt đoán: {count} / 5
      </div>
      <button style={{ fontSize: 40, cursor: "pointer" }} onClick={onExit}>
        Exit
      </button>
    </>
  );
}

export default KhoBau;
