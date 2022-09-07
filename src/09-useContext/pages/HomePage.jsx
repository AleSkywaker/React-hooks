import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const HomePage = () => {

  const { user } = useContext(UserContext);
  return (
    <>
      <h3>Welcome {user?.name} </h3>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
