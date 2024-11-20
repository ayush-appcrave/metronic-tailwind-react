/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { DataGrid, DataGridColumnHeader, DataGridColumnVisibility, DataGridRowSelect, DataGridRowSelectAll, KeenIcon, useDataGrid } from '@/components';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { ApiIntegrationsData } from '.';
const ApiIntegrations = () => {
  const ColumnInputFilter = ({
    column
  }) => {
    return <Input placeholder="Filter..." value={column.getFilterValue() ?? ''} onChange={event => column.setFilterValue(event.target.value)} className="h-9 w-full max-w-40" />;
  };
  const columns = useMemo(() => [{
    accessorKey: 'id',
    header: () => <DataGridRowSelectAll />,
    cell: ({
      row
    }) => <DataGridRowSelect row={row} />,
    enableSorting: false,
    enableHiding: false,
    meta: {
      headerClassName: 'w-0'
    }
  }, {
    accessorFn: row => row.integration,
    id: 'integration',
    header: ({
      column
    }) => <DataGridColumnHeader title='Integration' filter={<ColumnInputFilter column={column} />} column={column} />,
    enableSorting: true,
    cell: info => info.getValue(),
    meta: {
      headerClassName: 'min-w-[206px]',
      cellClassName: 'text-gray-700 font-normal'
    }
  }, {
    accessorFn: row => row.apiKey,
    id: 'apiKey',
    header: ({
      column
    }) => <DataGridColumnHeader title='API Key' column={column} />,
    enableSorting: true,
    cell: info => <div className="flex items-center text-gray-800 font-normal">
            {info.row.original.apiKey}
            <a href="#" className="btn btn-sm btn-icon btn-clear text-gray-500 hover:text-primary-active">
              <KeenIcon icon="copy" />
            </a>
          </div>,
    meta: {
      headerClassName: 'min-w-[224px]',
      cellClassName: 'text-gray-700 font-normal'
    }
  }, {
    accessorFn: row => row.dailyCalls,
    id: 'dailyCalls',
    header: ({
      column
    }) => <DataGridColumnHeader title='Daily Calls' column={column} />,
    enableSorting: true,
    cell: info => info.getValue(),
    meta: {
      headerClassName: 'min-w-[122px]',
      cellClassName: 'text-gray-700 font-normal'
    }
  }, {
    accessorFn: row => row.status,
    id: 'status',
    header: ({
      column
    }) => <DataGridColumnHeader title='Status' column={column} />,
    enableSorting: true,
    cell: info => info.getValue(),
    meta: {
      headerClassName: 'min-w-[98px]',
      cellClassName: 'text-gray-700 font-normal'
    }
  }, {
    id: 'actions',
    header: () => '',
    enableSorting: false,
    cell: () => {
      return <button className="btn btn-sm btn-icon btn-icon-lg btn-clear btn-light">
              <KeenIcon icon="notepad-edit" />
            </button>;
    },
    meta: {
      headerClassName: 'w-[60px]'
    }
  }], []);
  const data = useMemo(() => ApiIntegrationsData, []);
  const handleRowSelection = state => {
    const selectedRowIds = Object.keys(state);
    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo')
        }
      });
    }
  };
  const Toolbar = () => {
    const {
      table
    } = useDataGrid();
    return <div className="card-header px-5 py-5 border-b-0 gap-2">
        <h3 className="card-title">API Integrations</h3>

        <div className="flex items-center gap-2.5">
          <DataGridColumnVisibility table={table} />

          <div className="flex gap-7.5">
            <label className="switch switch-sm">
              <input name="check" type="checkbox" value="1" className="order-2" readOnly />
              <span className="switch-label order-1">Pause all</span>
            </label>
            <a href="#" className="btn btn-sm btn-primary">
              Add New
            </a>
          </div>
        </div>
      </div>;
  };
  return <DataGrid columns={columns} data={data} rowSelection={true} onRowSelectionChange={handleRowSelection} pagination={{
    size: 10
  }} sorting={[{
    id: 'integration',
    desc: false
  }]} toolbar={<Toolbar />} layout={{
    card: true
  }} />;
};
export { ApiIntegrations };