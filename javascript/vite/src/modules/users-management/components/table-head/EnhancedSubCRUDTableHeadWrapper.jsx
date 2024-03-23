import qs from 'qs';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useListView, useQueryRequest, useQueryResponsePagination } from '../../core';
import { EnhancedSubCRUDTableHead } from './EnhancedSubCRUDTableHead';
function EnhancedSubCRUDTableHeadWrapper() {
  const pagination = useQueryResponsePagination();
  const {
    onSelectAll,
    selected
  } = useListView();
  const [searchParams] = useSearchParams();
  const {
    updateState
  } = useQueryRequest();
  const queryOrder = qs.parse(searchParams.toString()).order;
  const querySort = qs.parse(searchParams.toString()).sort;
  const [order, setOrder] = useState(queryOrder ?? 'asc');
  const [orderBy, setOrderBy] = useState(querySort ?? 'created_at');
  const handleRequestSort = orderByProperty => {
    if (orderByProperty) {
      const isAsc = orderBy === orderByProperty && order === 'asc';
      const tableOrder = isAsc ? 'desc' : 'asc';
      setOrderBy(orderByProperty);
      setOrder(tableOrder);
      updateState({
        sort: orderByProperty,
        order: tableOrder
      }, true);
    }
  };
  return <EnhancedSubCRUDTableHead numSelected={selected.length} order={order} orderBy={orderBy} onSelectAllClick={onSelectAll} onRequestSort={handleRequestSort} rowCount={pagination.total ? pagination.total : 0} />;
}
export { EnhancedSubCRUDTableHeadWrapper };