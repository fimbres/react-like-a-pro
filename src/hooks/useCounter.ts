import { useState } from "react";

export const useCounter = (defaultVal: number = 0, minVal: number = 0) => {
  const [counter, setCounter] = useState(defaultVal);

  const increaseBy = (value: number) => {
    setCounter(v => v + value >= minVal ? v + value : v);
  };

  return {
    counter,
    increaseBy,
  }
};
