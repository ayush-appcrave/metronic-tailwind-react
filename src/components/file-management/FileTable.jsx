import { DataGrid, DataGridColumnHeader, KeenIcon } from '@/components';
import { Button } from '@/components/ui/button';
import { useMemo } from 'react';

const FileTable = ({ documents, onDelete }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'type',
        header: ({ column }) => <DataGridColumnHeader title="Document Type" column={column} />,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'file',
        header: ({ column }) => <DataGridColumnHeader title="Document Name" column={column} />,
        cell: (info) => info.getValue().name,
      },
      {
        accessorKey: 'url',
        header: ({ column }) => <DataGridColumnHeader title="Actions" column={column} />,
        cell: (info) => {
          const url = info.getValue();
          return (
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
              >
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
    <DataGrid
      columns={columns}
      data={documents}
      layout={{
        card: true,
      }}
    />
  );
};

export { FileTable };
