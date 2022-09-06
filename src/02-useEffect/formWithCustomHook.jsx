
import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';
export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm, userName, email, password } = useForm({
    userName: '',
    email: '',
    password: '',
  });

  // const {userName, email, password} = formState;

  useEffect(() => {
    // console.log('useEffect called!!')
  }, []);
  useEffect(() => {
    // console.log('formState changed!!');
  }, [formState]);
  useEffect(() => {
    // console.log('email changed!!');
  }, [email]);

  return (
    <>
      <h5>Formulario with Custom hook</h5>
      <br />
      <input
        type='text'
        className='form-control'
        placeholder='userName'
        name='userName'
        value={userName}
        onChange={onInputChange}
      />
      {userName === 'Alex2' && <Message />}
      <input
        type='email'
        className='form-control mt-3'
        placeholder='email...'
        name='email'
        autoComplete='off'
        value={email}
        onChange={onInputChange}
      />
      <input
        type='password'
        className='form-control mt-3'
        placeholder='password...'
        name='password'
        value={password}
        onChange={onInputChange}
      />

      <button className='btn btn-warning mt-3' onClick={onResetForm}>
        Reset form
      </button>
    </>
  );
};

