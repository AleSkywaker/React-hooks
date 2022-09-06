import { useFetch, useCounter } from '../hooks';
import { LoadingQuotes, Quotes } from '../components';
export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  return (
    <>
      <h3>Use Fetch (Custom hook)</h3>
      <h5>BreakingBad Quotes</h5>
      {isLoading ? <LoadingQuotes /> : <Quotes {...data[0]} />}
      <div className='btn btn-success' disabled={isLoading} onClick={() => increment(1)}>
        Next quote
      </div>
    </>
  );
};
