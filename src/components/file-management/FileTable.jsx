import { DataGrid, DataGridColumnHeader, KeenIcon } from '@/components';
import { DataGridPagination } from '@/components/data-grid/DataGridPagination';
import { Button } from '@/components/ui/button';
import { useMemo } from 'react';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL; // Set this in your environment variables

const FileTable = ({ documents, onDelete, pagination, onPageChange }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Document Name" column={column} />,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'createdAt',
        header: ({ column }) => <DataGridColumnHeader title="Upload Date" column={column} />,
        cell: (info) => new Date(info.getValue()).toLocaleString(),
      },
      {
        accessorKey: 'createdBy',
        header: ({ column }) => <DataGridColumnHeader title="Uploaded By" column={column} />,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'url',
        header: ({ column }) => <DataGridColumnHeader title="Actions" column={column} />,
        cell: (info) => {
          let filePath = info.getValue();

          // Convert relative path to absolute URL
          const fileUrl = `${API_BASE_URL}${filePath.replace(/\\/g, '/')}`;

          return (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => window.open(fileUrl, '_blank')}>
                <KeenIcon icon="eye" className="me-2" />
                View
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(info.row.original.id)}
              >
                <KeenIcon icon="trash" className="me-2" />
                Delete
              </Button>
            </div>
          );
        },
      },
    ],
    [onDelete]
  );

  return (
    <div>
      <DataGrid columns={columns} data={documents} layout={{ card: true }} />

      {pagination.totalPages > 1 && (
        <div className="mt-4 flex justify-end">
          <DataGridPagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export { FileTable };

