import { TableNoData } from '@components/table';

import { useQueryResponseLoading, useQueryResponsePagination } from '../../core';

function EmptyTable() {
  const pagination = useQueryResponsePagination();
  const isLoading = useQueryResponseLoading();

  return <>{!pagination.total && !isLoading && <TableNoData colSpan={8}></TableNoData>}</>;
}

export { EmptyTable };
