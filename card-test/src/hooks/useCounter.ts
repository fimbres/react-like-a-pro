import { useEffect, useRef, useState } from "react";

import { InitialValues } from "../interfaces/ProductCard";

interface useCounterProps {
  value: number;
  initialValues?: InitialValues;
  onChange?: (quantity: number) => void;
}

export const useCounter = ({ value, initialValues, onChange } : useCounterProps) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isControlled = useRef(onChange);

  const increaseBy = (value: number) => {
    const newValue = counter + value;

    if(newValue >= 0 && newValue <= (initialValues?.maxCount || Infinity) && isControlled.current) {
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
