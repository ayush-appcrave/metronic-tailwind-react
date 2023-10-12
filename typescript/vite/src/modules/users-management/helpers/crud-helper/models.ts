 
import { type PaginationState, QueryState } from '@components/table/types';
import { GridFilterItem } from '@mui/x-data-grid';
import { type Dispatch, type SetStateAction } from 'react';
import { QueryObserverResult } from 'react-query';

import { type UsersQueryResponse } from '../../core/_models';

export interface SearchState {
  search?: string;
}

export interface FilterState {
  role?: '' | 'all' | 'user' | 'admin';
  advanced?: GridFilterItem[];
}

export type UserQueryState = QueryState & FilterState & SearchState;

export interface Response<T> {
  data?: T;
  pagination?: PaginationState;
}

export interface QueryRequestContextProps {
  state: UserQueryState;
  updateState: (updates: Partial<UserQueryState>, saveToQuery?: boolean | undefined) => void;
}

export const initialQueryState: PaginationState & FilterState & SearchState = {
  current_page: 1,
  items_per_page: 10,
  page: 1,
  role: '',
  search: ''
};

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {}
};

export interface QueryResponseContextProps<T> {
  response?: UsersQueryResponse | undefined;
  refetch: () => Promise<QueryObserverResult<UsersQueryResponse, unknown>>;
  isLoading: boolean;
  query: string;
}

export const initialQueryResponse = { isLoading: false, query: '' };

export interface ListViewContextProps {
  selected: string[];
  onSelect: (selectedId: string) => void;
  onSelectAll: () => void;
  clearSelected: () => void;
  // NULL => (CREATION MODE) | MODAL IS OPENED
  // NUMBER => (EDIT MODE) | MODAL IS OPENED
  // UNDEFINED => MODAL IS CLOSED
  itemIdForUpdate?: string;
  setItemIdForUpdate: Dispatch<SetStateAction<string | undefined>>;
  isAllSelected: boolean;
  disabled: boolean;
}

export const initialListView: ListViewContextProps = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false
};
