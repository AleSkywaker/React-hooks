import React from 'react'
import { CounterApp, CounterWithCustomHook } from './01-useState';

export const HooksApp = () => {
  return (
    <>
      <div className='container'>
      <h2>HooksApp</h2>
      <hr />
      <CounterApp />
      <hr />
      <CounterWithCustomHook/>
      </div>
    </>
  );
}
