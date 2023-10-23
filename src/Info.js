import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(nickName);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNinckName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName}></input>
      <input value={nickName} onChange={onChangeNinckName}></input>
      <div>
        <div>
          <b>이름:{name}</b>
        </div>
        <div>
          <b>닉네임:{nickName}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
