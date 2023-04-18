import { type FC, useState, createContext, useContext, type ReactNode } from 'react';
import { type QueryState, type QueryRequestContextProps, initialQueryRequest } from '../helpers';

interface WithChildren {
  children?: ReactNode;
}

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest);

const QueryRequestProvider: FC<WithChildren> = ({ children }) => {
  const [state, setState] = useState<QueryState>(initialQueryRequest.state);

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState: QueryState = { ...state, ...updates };
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
