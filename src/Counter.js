import React, { useReducer } from "react";

//useReducer -useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라서 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook
//리듀서는 현재 상태,업데이트를 위해 필요한 정보를 담은 액션 값을 전달 받아 새로운 상태를 반환하는 함수
function reducers(state, action) {
  //action,type에 다라서 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    //아무것도 해당되지 않을 때 기존 state 반환
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducers, { value: 0 }); //useReducer의 첫번째 파라미터는 reducers 함수를 넣어주고,두번째 파라미에는 해당 리듀서의 기본값을 넣어준다.
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
