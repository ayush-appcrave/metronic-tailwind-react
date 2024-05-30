import { TableHeadCustom } from '@/components/table';
import { headCells } from '../../core';
function EnhancedSubCRUDTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort
  } = props;
  const createSortHandler = property => {
    onRequestSort(property);
  };
  return <TableHeadCustom tableKey="user-sub-table" headCells={[...[{
    id: null,
    hideSortIcon: true,
    width: '5%'
  }], ...headCells]} orderBy={orderBy} order={order} onSort={createSortHandler}></TableHeadCustom>;
}
export { EnhancedSubCRUDTableHead };