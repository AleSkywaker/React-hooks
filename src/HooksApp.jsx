import React from 'react'
import { CounterApp, CounterWithCustomHook } from './01-useState';
import { FormWithCustomHook } from './02-useEffect/formWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './03-useFetch/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';

export const HooksApp = () => {
  return (
    <>
      <div className='container'>
        <h2>HooksApp</h2>
        <hr />
        <FocusScreen />
        <hr />
        <CounterApp />
        <hr />
        <CounterWithCustomHook />
        <hr />
        <SimpleForm />
        <hr />
        <FormWithCustomHook />
        <hr />
        <MultipleCustomHooks />
        <hr />
      </div>
    </>
  );
}
