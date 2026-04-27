import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  return {
    count,
    inc: () => setCount(c => c + 1),
    dec: () => setCount(c => c - 1),
  };
};