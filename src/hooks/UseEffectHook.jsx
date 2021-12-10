import { useEffect, useState } from 'react';
import { FetchAPI } from '../util/fetchAPI';

function useEffectHook(type, state) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const result = await FetchAPI(state, type);
      setResult(result);
    }
    fetchAPI();
  }, [type, state]);

  return result;
}

export default useEffectHook;