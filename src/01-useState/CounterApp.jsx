import { useState } from 'react'

export const CounterApp = ()  => {
  const [state, setCounter] = useState({
    counter1:10,
    counter2:10,
    counter3:30,
  });

  const onAdd = () =>
    setCounter(({counter1}) => ({
      ...state,
      counter1: counter1 + 1,
    }));
  return (
    <>
      <h3>Use state</h3>
      <h4>Counter: {state.counter1}</h4>
      <button onClick={onAdd} className='mr-3'>
        + 1
      </button>
      <button
        onClick={() =>
          setCounter(() => ({
            counter1: 0,
          }))
        }
        className='mr-3'
      >
        Reset
      </button>
      {/* <button onClick={()=> setCounter((count)=> count - 1)}>- 1</button> */}
    </>
  );
}


