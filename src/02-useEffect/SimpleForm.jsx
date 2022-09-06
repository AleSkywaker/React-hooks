import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    userName: 'Alex',
    email: 'alex@email.com'
  });

  const { userName, email } = formState;

  const onInputChange = ({target}) => {
    const { name, value } = target;
   setFormState({
    ...formState,
    [ name ] : value
   })
  }

  useEffect(() => {
    // console.log('useEffect called!!')
  },[]);
  useEffect(() => {
    // console.log('formState changed!!');
  }, [formState]);
  useEffect(() => {
    // console.log('email changed!!');
  }, [email]);

  return (
    <>
      <h3>UseEffect</h3>
      <h5>Formulario Simple</h5>
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
    </>
  );
}
