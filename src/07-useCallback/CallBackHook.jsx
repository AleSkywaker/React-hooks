import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
      setCounter((c) => c + value);
    },
    [],
  )

  return (
    <>
      <h3>UseCallback</h3>
      <h6>counter : {counter}</h6>

      <ShowIncrement increment={incrementFather} />
    </>
  );
}
