import React, { useEffect, useState } from "react";

const Say = () => {
  const [msg, setMsg] = useState("입장하시나요 퇴장하시나요?");
  const [color, setColoer] = useState("black");
  const onClickEnter = () => {
    setMsg("안녕하세요!");
  };
  const onClickLeave = () => {
    setMsg("안녕히가세요!");
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{msg}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColoer("red");
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColoer("green");
        }}
      >
        초록색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColoer("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
