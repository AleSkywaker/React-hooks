import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const HeavyStuff = (iterationNumber = 100 ) =>{
  for(let i = 0; i < iterationNumber; i++){
    // console.log('iterando')
  }
  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
  const {counter, increment } = useCounter(30)
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => HeavyStuff(counter), [counter]);
  return (
    <>
      <h3>MemoHook</h3>
      <h6>
        Counter: <small>{counter}</small>
      </h6>

      <h6>{memorizedValue}</h6>
      <button className='btn btn-primary' onClick={() => increment(1)}>
        + 1
      </button>
      <button className='btn btn-outline-primary ml-2' onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
}
