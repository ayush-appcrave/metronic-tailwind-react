import qs from 'qs';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { initialQueryRequest, stringifyRequestQuery } from '../helpers';
const QueryRequestContext = createContext(initialQueryRequest);
const QueryRequestProvider = ({
  children
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({
    ...initialQueryRequest.state,
    // initialze state with valus from query
    ...qs.parse(searchParams.toString())
  });
  useEffect(() => {
    console.log('state', state);
  }, [state]);
  const updateState = (updates, saveToQuery = false) => {
    const updatedState = {
      ...state,
      ...updates
    };
    if (saveToQuery) {
      setSearchParams(stringifyRequestQuery({
        ...updatedState
      }));
    }
    setState(updatedState);
  };
  return <QueryRequestContext.Provider value={{
    state,
    updateState
  }}>
      {children}
    </QueryRequestContext.Provider>;
};
const useQueryRequest = () => useContext(QueryRequestContext);
export { QueryRequestProvider, useQueryRequest };