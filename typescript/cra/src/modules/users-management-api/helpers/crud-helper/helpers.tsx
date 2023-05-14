import {
  createContext,
  type Context,
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState
} from 'react';
import qs from 'qs';
import { type QueryResponseContextProps, type UserQueryState } from './models';

function createResponseContext<T>(
  initialState: QueryResponseContextProps<T>
): Context<QueryResponseContextProps<T>> {
  return createContext(initialState);
}

function isNotEmpty(obj: unknown): boolean {
  return obj !== undefined && obj !== null && obj !== '';
}

// Example: page=1&items_per_page=10&sort=id&order=desc&search=a&filter_name=a&filter_online=false
function stringifyRequestQuery(state: UserQueryState): string {
  const pagination = qs.stringify(state, { filter: ['page', 'items_per_page'], skipNulls: true });
  const sort = qs.stringify(state, { filter: ['sort', 'order'], skipNulls: true });
  const filter = state.advanced ? qs.stringify([...state.advanced], { encode: false }) : '';
  const search = isNotEmpty(state.search)
    ? qs.stringify(state, { filter: ['search'], skipNulls: true })
    : '';

  const role = qs.stringify(state, { skipNulls: true });

  console.log(
    [pagination, sort, search, role, filter]
      .filter((f) => f)
      .join('&')
      .toLowerCase()
  );

  return [pagination, sort, search, role, filter]
    .filter((f) => f)
    .join('&')
    .toLowerCase();
}

function parseRequestQuery(query: string): UserQueryState {
  const cache: unknown = qs.parse(query);
  return cache as UserQueryState;
}

function calculatedGroupingIsDisabled<T>(isLoading: boolean, data: T[] | undefined): boolean {
  if (isLoading) {
    return true;
  }

  return !data?.length;
}

function calculateIsAllDataSelected<T>(
  data: T[] | undefined,
  selected: Array<string | undefined>
): boolean {
  if (!data) {
    return false;
  }

  return data.length > 0 && data.length === selected.length;
}

function groupingOnSelect(
  id: string,
  selected: Array<string | undefined>,
  setSelected: Dispatch<SetStateAction<Array<string | undefined>>>
) {
  if (!id) {
    return;
  }

  if (selected.includes(id)) {
    setSelected(selected.filter((itemId) => itemId !== id));
  } else {
    const updatedSelected = [...selected];
    updatedSelected.push(id);
    setSelected(updatedSelected);
  }
}

function groupingOnSelectAll<T>(
  isAllSelected: boolean,
  setSelected: Dispatch<SetStateAction<Array<string | undefined>>>,
  data?: Array<T & { id?: string }>
) {
  if (isAllSelected) {
    setSelected([]);
    return;
  }

  if (!data?.length) {
    return;
  }

  setSelected(data.filter((item) => item.id).map((item) => item.id));
}

// Hook
function useDebounce(value: string | undefined, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export {
  createResponseContext,
  stringifyRequestQuery,
  parseRequestQuery,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  useDebounce,
  isNotEmpty
};
