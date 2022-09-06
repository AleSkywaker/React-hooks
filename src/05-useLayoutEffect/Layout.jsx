import { useFetch, useCounter } from '../hooks';
import { LoadingQuotes, Quotes } from '../components';
export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  return (
    <>
      <h3>UseLayoutEffect</h3>
      <h5 className='text-center'>.....</h5>
      {isLoading ? <LoadingQuotes /> : <Quotes {...data[0]} />}
      <div className='btn btn-success' disabled={isLoading} onClick={() => increment(1)}>
        Next quote
      </div>
    </>
  );
};
