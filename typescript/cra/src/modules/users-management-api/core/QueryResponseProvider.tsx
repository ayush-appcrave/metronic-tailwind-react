/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FC, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { useQuery } from 'react-query';
import { type PaginationState } from '@components/table/types';
import {
  createResponseContext,
  initialQueryResponse,
  initialQueryState,
  QUERIES,
  stringifyRequestQuery
} from '../helpers';
import { getUsers } from './_requests';
import { type User } from './_models';
import { useQueryRequest } from './QueryRequestProvider';

interface WithChildren {
  children?: ReactNode;
}

const QueryResponseContext = createResponseContext<User>(initialQueryResponse);
const QueryResponseProvider: FC<WithChildren> = ({ children }) => {
  const { state } = useQueryRequest();
  const [query, setQuery] = useState<string>(stringifyRequestQuery(state));
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state]);

  useEffect(() => {
    if (query !== updatedQuery) {
      setQuery(updatedQuery);
    }
  }, [updatedQuery]);

  const {
    isFetching,
    refetch,
    data: response
  } = useQuery(
    `${QUERIES.USERS_LIST}-${query}`,
    async () => {
      return await getUsers(query);
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  );

  return (
    <QueryResponseContext.Provider value={{ isLoading: isFetching, refetch, response, query }}>
      {children}
    </QueryResponseContext.Provider>
  );
};

const useQueryResponse = () => useContext(QueryResponseContext);

const useQueryResponseData = () => {
  const { response } = useQueryResponse();
  if (!response) {
    return [];
  }
  return response?.data || [];
};

const useQueryResponsePagination = (): PaginationState => {
  const defaultPaginationState: PaginationState = {
    links: [],
    ...initialQueryState
  };

  const { response } = useQueryResponse();

  if (!response) {
    return defaultPaginationState;
  }

  return response?.pagination;
};

const useQueryResponseLoading = (): boolean => {
  const { isLoading } = useQueryResponse();
  return isLoading;
};

export {
  QueryResponseProvider,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponsePagination,
  useQueryResponseLoading
};
