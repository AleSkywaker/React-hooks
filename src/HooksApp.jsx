import React from 'react'
import { CounterApp, CounterWithCustomHook } from './01-useState';
import { FormWithCustomHook } from './02-useEffect/formWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './03-useFetch/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { MemoHook } from './06-memos/MemoHook';
import { Memorize } from './06-memos/Memorize';
import { CallBackHook } from './07-useCallback/CallBackHook';

export const HooksApp = () => {
  return (
    <>
      <div className='container'>
        <h2>HooksApp</h2>
        <hr />
        <CallBackHook/>
        <hr />
        <MemoHook/>
        <hr />
        <Memorize/>
        <hr />
        <Layout/>
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
