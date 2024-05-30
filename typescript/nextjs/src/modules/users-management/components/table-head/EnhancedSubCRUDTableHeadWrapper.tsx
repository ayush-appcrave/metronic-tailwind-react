import qs from 'qs';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Order } from '@/components/table/types';

import { useListView, useQueryRequest, useQueryResponsePagination, User } from '../../core';
import { EnhancedSubCRUDTableHead } from './EnhancedSubCRUDTableHead';

function EnhancedSubCRUDTableHeadWrapper() {
  const pagination = useQueryResponsePagination();
  const { onSelectAll, selected } = useListView();
  const [searchParams] = useRouter().query;
  const { updateState } = useQueryRequest();
  const queryOrder: Order | undefined = qs.parse(searchParams.toString()).order as Order;
  const querySort: keyof User | undefined = qs.parse(searchParams.toString()).sort as keyof User;
  const [order, setOrder] = useState<Order>(queryOrder ?? 'asc');
  const [orderBy, setOrderBy] = useState<keyof User>(querySort ?? 'created_at');

  const handleRequestSort = (orderByProperty: keyof User | null) => {
    if (orderByProperty) {
      const isAsc = orderBy === orderByProperty && order === 'asc';
      const tableOrder: Order = isAsc ? 'desc' : 'asc';
      setOrderBy(orderByProperty);
      setOrder(tableOrder);
      updateState({ sort: orderByProperty, order: tableOrder }, true);
    }
  };

  return (
    <EnhancedSubCRUDTableHead
      numSelected={selected.length}
      order={order}
      orderBy={orderBy}
      onSelectAllClick={onSelectAll}
      onRequestSort={handleRequestSort}
      rowCount={pagination.total ? pagination.total : 0}
    />
  );
}

export { EnhancedSubCRUDTableHeadWrapper };
