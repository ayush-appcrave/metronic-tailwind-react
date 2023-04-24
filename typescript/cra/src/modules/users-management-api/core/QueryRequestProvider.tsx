import { type FC, useState, createContext, useContext, type ReactNode } from 'react';
import { type QueryState, type QueryRequestContextProps, initialQueryRequest } from '../helpers';
import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';

interface WithChildren {
  children?: ReactNode;
}

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest);

const QueryRequestProvider: FC<WithChildren> = ({ children }) => {
  const [state, setState] = useState<QueryState>(initialQueryRequest.state);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateState = (updates: Partial<QueryState>, saveToQuery = false) => {
    const updatedState: QueryState = { ...state, ...updates };
    if (saveToQuery) {
      setSearchParams(qs.stringify({ ...qs.parse(searchParams.toString()), ...updates }));
    }
    setState(updatedState);
  };

  return (
    <QueryRequestContext.Provider value={{ state, updateState }}>
      {children}
    </QueryRequestContext.Provider>
  );
};

const useQueryRequest = () => useContext(QueryRequestContext);
export { QueryRequestProvider, useQueryRequest };
