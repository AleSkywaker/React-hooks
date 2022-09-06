import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
  const {counter, increment } = useCounter(10)
  const [show, setShow] = useState(true);

  return (
    <>
      <h3>Memorize</h3>
      <h6>
        Counter: <Small value={counter} />
      </h6>

      <button className='btn btn-primary' onClick={() => increment(1)}>
        + 1
      </button>
      <button className='btn btn-outline-primary ml-2' onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
}
