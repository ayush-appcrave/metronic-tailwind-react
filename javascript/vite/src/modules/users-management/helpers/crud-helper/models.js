export const initialQueryState = {
  current_page: 1,
  items_per_page: 10,
  page: 1,
  role: '',
  search: ''
};
export const initialQueryRequest = {
  state: initialQueryState,
  updateState: () => {}
};
export const initialQueryResponse = {
  isLoading: false,
  query: ''
};
export const initialListView = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false
};