import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, increment, decrement } from "./store/store";

const Counter = () => {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>Remote Counter: {value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
