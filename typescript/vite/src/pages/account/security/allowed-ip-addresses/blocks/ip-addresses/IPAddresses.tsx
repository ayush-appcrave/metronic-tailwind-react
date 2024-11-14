/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { Column, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { DataGrid, DataGridColumnHeader, DataGridColumnVisibility, DefaultTooltip, KeenIcon, useDataGrid } from '@/components';
import { IPAddressesData, IIPAddressesData } from '.';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

const IPAddresses = () => {
  const ColumnInputFilter = <TData, TValue>({ column }: IColumnFilterProps<TData, TValue>) => {
    return (
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
      />
    );
  };  

  const columns = useMemo<ColumnDef<IIPAddressesData>[]>(
    () => [
      {
        accessorFn: (row) => row.status,
        id: 'status',
        header: ({ column }) => <DataGridColumnHeader title="Status" filter={<ColumnInputFilter column={column}/>} column={column} />, 
        enableSorting: true,
        cell: (info) => (
          <span className={`badge badge-dot size-2 ${info.row.original.status}`}></span>
        ),
        meta: {
          className: 'w-[100px]',
          cellClassName: 'text-center'
        },
      },
      {
        accessorFn: (row) => row.ipAddress,
        id: 'ipAddress',
        header: ({ column }) => <DataGridColumnHeader title="IP Address" column={column}/>, 
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[250px]',
        },
      },
      {
        accessorFn: (row) => row.lastSession,
        id: 'lastSession',
        header: ({ column }) => <DataGridColumnHeader title="Last Session" column={column}/>,  
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[185px]',
        },
      },
      {
        accessorFn: (row) => row.label,
        id: 'label',
        header: ({ column }) => <DataGridColumnHeader title="Label" column={column}/>,  
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[185px]',
        },
      },
      {
        accessorFn: (row) => row.method,
        id: 'method', 
        header: ({ column }) => (
          <>
            <div className="flex items-center" >
              <DefaultTooltip title="Verify the identity of a user trying to access a resource" placement="left" className="max-w-48">
                <KeenIcon icon="information-2" className="text-lg leading-none me-1 mb-0.5" />
              </DefaultTooltip>
              <DataGridColumnHeader title="Method" column={column}/>
            </div>
          </>
        ),
        enableSorting: true,
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[185px]',
        },
      },
      {
        id: 'edit',
        header: () => '',
        enableSorting: false,
        cell: ({ row }) => (
          <button 
            className="btn btn-sm btn-icon btn-clear btn-light" 
            onClick={() => alert(`Clicked on edit for ${row.original.label}`)}
          >
            <KeenIcon icon="notepad-edit" />
          </button>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
      {
        id: 'delete',
        header: () => '',
        enableSorting: false,
        cell: ({ row }) => (
          <button 
            className="btn btn-sm btn-icon btn-clear btn-light" 
            onClick={() => alert(`Clicked on delete for ${row.original.label}`)}
          >
            <KeenIcon icon="trash" />
          </button>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
    ],
    []
  );

  const data: IIPAddressesData[] = useMemo(() => IPAddressesData, []);

  const handleRowSelection = (state: RowSelectionState) => {
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
    const { table } = useDataGrid();

    return (
      <div className="card-header border-b-0 px-5">
        <h3 className="card-title">IP Addresses</h3>

        <div className="flex items-center gap-2.5">
          <button className="btn btn-light btn-sm">
            <KeenIcon icon="exit-down" />
            IP Allowlist Enabled
          </button>
          <DataGridColumnVisibility table={table}/>
        </div>
      </div>
    );
  }; 

  return (
    <DataGrid 
      columns={columns} 
      data={data} 
      rowSelection={true} 
      onRowSelectionChange={handleRowSelection}
      pagination={{ size: 10 }}
      sorting={[{ id: 'method', desc: false }]} 
      toolbar={<Toolbar />}
      layout={{ card: true }}
    />
  ); 
};

export { IPAddresses };
