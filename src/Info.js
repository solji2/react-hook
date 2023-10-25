import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  console.log(state);
  console.log(action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });

  const { name, nickName } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input value={name} onChange={onChange}></input>
      <input value={nickName} onChange={onChange}></input>
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
