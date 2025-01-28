import { DataGrid, DataGridColumnHeader, KeenIcon } from '@/components';
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
        accessorKey: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Document Name" column={column} />,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'url',
        header: ({ column }) => <DataGridColumnHeader title="Document URL" column={column} />,
        cell: (info) => (
          <a
            href={info.getValue()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-active"
          >
            View Document
          </a>
        ),
      },
      {
        id: 'actions',
        cell: ({ row }) => (
          <button
            onClick={() => onDelete(row.original.id)}
            className="btn btn-icon btn-sm btn-light-danger"
          >
            <KeenIcon icon="trash" className="text-danger" />
          </button>
        ),
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
