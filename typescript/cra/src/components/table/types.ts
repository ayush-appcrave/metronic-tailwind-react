export type Order = 'asc' | 'desc';

export interface PaginationStateLinks {
  label: string;
  active: boolean;
  url: string | null;
  page: number | null;
}

export interface PaginationState {
  page?: number;
  links?: PaginationStateLinks[];
  current_page?: number;
  first_page_url?: number;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: string;
  items_per_page?: number;
  prev_page_url?: number;
  to?: number;
  total?: number;
}

export interface SortState {
  sort?: string;
  order?: Order;
}

export type QueryState = PaginationState & SortState;
