/* eslint-disable no-unused-vars */
import { type Dispatch, type SetStateAction } from 'react';
import { type UsersQueryResponse } from '../../core/_models';
import { GridFilterItem } from '@mui/x-data-grid';
import { type PaginationState, QueryState } from '@components/table/types';

export interface SearchState {
  search?: string;
}

export interface FilterState {
  role?: 'all' | 'user' | 'admin';
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

export const initialQueryState: UserQueryState = {
  current_page: 1,
  items_per_page: 10,
  total: 0,
  page: 0
};

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {}
};

export interface QueryResponseContextProps<T> {
  response?: UsersQueryResponse | undefined;
  refetch: () => void;
  isLoading: boolean;
  query: string;
}

export const initialQueryResponse = { refetch: () => {}, isLoading: false, query: '' };

export interface ListViewContextProps {
  selected: Array<string | undefined>;
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
