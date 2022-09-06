import { useState } from 'react'

export const useCounter = ( initialValue = 10 ) => {

  const [counter, setcounter] = useState(initialValue);

  const increment = (value= 1) => {
    setcounter((c)=> c + value)
  }
  const decrement = (value=1) => {
    if (counter === 0) return;
     setcounter((c) => c - value);
  }
  const reset = () => {
    setcounter((c) => (c = initialValue));
  }

  return {
    counter,
    increment,
    decrement,
    reset
  };
}