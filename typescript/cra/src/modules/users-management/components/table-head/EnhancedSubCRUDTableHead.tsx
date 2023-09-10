import { TableHeadCustom } from '@components/table';
import { type Order } from '@components/table/types';
import React, { type ChangeEvent, type FormEvent } from 'react';

import { headCells, type User } from '../../core';

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: FormEvent<unknown>, property: keyof User | null) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedSubCRUDTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof User | null) => (event: FormEvent<unknown>) => {
    onRequestSort(event, property);
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
