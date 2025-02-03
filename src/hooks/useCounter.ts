import { useEffect, useRef, useState } from "react";

interface useCounterProps {
  value: number;
  defaultVal?: number;
  minVal?: number;
  onChange?: (quantity: number) => void;
}

export const useCounter = ({ minVal = 0, value, onChange } : useCounterProps) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(onChange);

  const increaseBy = (value: number) => {
    const newValue = counter + value;

    if(newValue >= minVal && isControlled.current) {
      setCounter(newValue);
      onChange?.(newValue);
    }
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  }
};
