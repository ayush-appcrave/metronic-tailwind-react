import { Order } from '../@types/sort';
import { User } from '../core/_models';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: string }, b: { [key in Key]: string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: User[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function filterRow(array: User[], roleFilter: string, nameFilter: string | null): User[] {
  let filteredItems = array;

  if (roleFilter !== 'all') {
    filteredItems = filteredItems.filter((row) => row.role === roleFilter);
  }

  if (nameFilter !== null) {
    filteredItems = filteredItems.filter(
      (row) => row.first_name?.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1
    );
  }

  return filteredItems;
}

export { descendingComparator, getComparator, stableSort, filterRow };
