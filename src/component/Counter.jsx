import React, { useState, useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";

const Counter = ({ targetAmount, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.ceil(targetAmount / (duration / 10));
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= targetAmount) {
          clearInterval(timer);
          return targetAmount;
        }
        return prev + step;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [targetAmount, duration]);

  return (
    <h1 className="flex text-3xl sm:text-4xl md:text-5xl items-center justify-center font-bold text-white">
      <MdCurrencyRupee className="mr-1 sm:mr-2" size={42} />{" "}
      {count.toLocaleString()}
    </h1>
  );
};

export default Counter;
