import { TableHeadCustom } from '@components/table';
import { type Order } from '@components/table/types';
import { type ChangeEvent } from 'react';

import { headCells, type User } from '../../core';

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (property: keyof User | null) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedSubCRUDTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof User | null) => {
    onRequestSort(property);
  };

  return (
    <TableHeadCustom
      tableKey="user-sub-table"
      headCells={[...[{ id: null, hideSortIcon: true, width: '5%' }], ...headCells]}
      orderBy={orderBy}
      order={order}
      onSort={createSortHandler}
    ></TableHeadCustom>
  );
}

export { EnhancedSubCRUDTableHead };
