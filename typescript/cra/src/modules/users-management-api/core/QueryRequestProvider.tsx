import { createContext, type FC, type ReactNode, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  initialQueryRequest,
  type QueryRequestContextProps,
  stringifyRequestQuery,
  UserQueryState
} from '../helpers';

interface WithChildren {
  children?: ReactNode;
}

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest);

const QueryRequestProvider: FC<WithChildren> = ({ children }) => {
  const [state, setState] = useState<UserQueryState>(initialQueryRequest.state);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateState = (updates: Partial<UserQueryState>, saveToQuery = false) => {
    const updatedState: UserQueryState = { ...state, ...updates };
    if (saveToQuery) {
      setSearchParams(stringifyRequestQuery({ ...updatedState }));
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
