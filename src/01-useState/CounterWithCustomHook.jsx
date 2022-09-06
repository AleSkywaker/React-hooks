import { useState } from 'react';
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const [inputValue, setInputValue] = useState(5);
  const {counter, increment, reset, decrement} = useCounter(0);

  const onHandleChange = ({target})=>{
   setInputValue(+target.value)
  }

  return (
    <>
      <h4>Counter with custom hook: {counter}</h4>
      <h6>Cuanto quieres decrementar?</h6>
      <input type='text' onChange={onHandleChange} value={inputValue}/>
      <br />
      <button className='btn btn-primary mr-3 mt-3' onClick={() => increment(inputValue)}>
        + {inputValue}
      </button>
      <button className='btn btn-primary mr-3 mt-3' onClick={reset}>
        Reset
      </button>
      <button className='btn btn-primary mr-3 mt-3' onClick={() => decrement(inputValue)}>
        - {inputValue}
      </button>
    </>
  );
}
