import { useState } from "react";
import KhoBau from "./KhoBau";

const GAME_STATUS = {
  START: "start",
  END: "end",
};

const get3RandomIndex = () => {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * 10);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes;
};

function Game() {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.END);
  const [array, setArray] = useState([]);

  const initGameData = () => {
    const newArray = [];
    const selectedIndexes = get3RandomIndex(); // 3 vị trí giấu kho báu
    for (let i = 0; i < 10; i++) {
      if (selectedIndexes.includes(i)) {
        newArray.push(1);
      } else {
        newArray.push(0);
      }
    }
    setArray(newArray);
  };

  const onExit = () => {
    setGameStatus(GAME_STATUS.END);
    setArray([]);
  };

  if (gameStatus === GAME_STATUS.END) {
    return (
      <button
        onClick={() => {
          initGameData();
          setGameStatus(GAME_STATUS.START);
        }}
        style={{ fontSize: 40, cursor: "pointer" }}
      >
        Start Game
      </button>
    );
  }

  return <KhoBau array={array} onExit={onExit} />;
}

export default Game;
