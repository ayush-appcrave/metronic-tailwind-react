import qs from 'qs';
import { createContext, type FC, type ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const [searchParams, setSearchParams] = useRouter().query;
  const [state, setState] = useState<UserQueryState>({
    ...initialQueryRequest.state,
    // initialze state with valus from query
    ...(qs.parse(searchParams.toString()) as Partial<UserQueryState>)
  });

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
