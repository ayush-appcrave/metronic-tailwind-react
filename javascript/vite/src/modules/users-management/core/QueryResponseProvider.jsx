import { useContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { createResponseContext, initialQueryState, QUERIES, stringifyRequestQuery } from '../helpers';
import { getUsers } from './_requests';
import { useQueryRequest } from './QueryRequestProvider';
const QueryResponseContext = createResponseContext(null);
const QueryResponseProvider = ({
  children
}) => {
  const {
    state
  } = useQueryRequest();
  const [query, setQuery] = useState(stringifyRequestQuery(state));
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state]);
  useEffect(() => {
    if (query !== updatedQuery) {
      console.log('query was really updated');
      setQuery(updatedQuery);
    }
  }, [updatedQuery]);
  const {
    isFetching,
    refetch,
    data: response
  } = useQuery({
    queryKey: `${QUERIES.USERS_LIST}-${query}`,
    queryFn: async () => {
      console.log('Request users');
      return await getUsers(query);
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });
  return <QueryResponseContext.Provider value={{
    isLoading: isFetching,
    refetch,
    response,
    query
  }}>
      {children}
    </QueryResponseContext.Provider>;
};
const useQueryResponse = () => {
  const context = useContext(QueryResponseContext);
  if (!context) throw new Error('QueryResponseProvider is required to use useQueryResponse');
  return context;
};
const useQueryResponseData = () => {
  const {
    response
  } = useQueryResponse();
  if (!response) {
    return [];
  }
  return response?.data || [];
};
const useQueryResponsePagination = () => {
  const defaultPaginationState = {
    links: [],
    ...initialQueryState
  };
  const {
    response
  } = useQueryResponse();
  if (!response) {
    return defaultPaginationState;
  }
  return response.pagination;
};
const useQueryResponseLoading = () => {
  const {
    isLoading
  } = useQueryResponse();
  return isLoading;
};
export { QueryResponseProvider, useQueryResponse, useQueryResponseData, useQueryResponseLoading, useQueryResponsePagination };