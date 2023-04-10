import {Dispatch, SetStateAction} from 'react'
import {UsersQueryResponse} from "../../core/_models";

export type PaginationState = {
  page?: number,
  links?: Array<{label: string; active: boolean; url: string | null; page: number | null}>
  current_page?: number,
  first_page_url?: number,
  from?: number,
  last_page?: number,
  last_page_url?: string,
  next_page_url?: string,
  items_per_page?: number,
  prev_page_url?: number,
  to?: number,
  total: number,
}

export type SortState = {
  sort?: string
  order?: 'asc' | 'desc'
}

export type FilterState = {
  role?: "all" | "user" | "admin",
}

export type SearchState = {
  search?: string
}

export type Response<T> = {
  data?: T;
  pagination?: PaginationState;
}

export type QueryState = PaginationState & SortState & FilterState & SearchState

export type QueryRequestContextProps = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
}

export const initialQueryState: QueryState = {
  current_page: 1,
  items_per_page: 10,
  total: 0
}

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {},
}

export type QueryResponseContextProps<T> = {
  response?: UsersQueryResponse | undefined
  refetch: () => void
  isLoading: boolean
  query: string
}

export const initialQueryResponse = {refetch: () => {}, isLoading: false, query: ''}

export type ListViewContextProps = {
  selected: Array<string | undefined>
  onSelect: (selectedId: string) => void
  onSelectAll: () => void
  clearSelected: () => void
  // NULL => (CREATION MODE) | MODAL IS OPENED
  // NUMBER => (EDIT MODE) | MODAL IS OPENED
  // UNDEFINED => MODAL IS CLOSED
  itemIdForUpdate?: string
  setItemIdForUpdate: Dispatch<SetStateAction<string | undefined>>
  isAllSelected: boolean
  disabled: boolean
}

export const initialListView: ListViewContextProps = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
}
