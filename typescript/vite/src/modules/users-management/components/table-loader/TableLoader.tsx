import { TableOverlayLoader, TableSkeletonLoader } from '@/components/table';
import { useMemo } from 'react';

import {
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination
} from '../../core';

interface TableLoaderProps {
  dense: boolean;
}

function TableLoader(props: TableLoaderProps) {
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const pagination = useQueryResponsePagination();
  const isLoading = useQueryResponseLoading();

  return (
    <>
      {isLoading &&
        (data.length ? (
          <TableOverlayLoader
            colSpan={8}
            itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}
            rowHeight={props.dense ? 49 : 69}
          ></TableOverlayLoader>
        ) : (
          <TableSkeletonLoader
            itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}
          ></TableSkeletonLoader>
        ))}
    </>
  );
}

export { TableLoader };
