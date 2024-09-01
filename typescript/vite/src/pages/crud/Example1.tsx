import React from 'react'
import {
    Column,
    ColumnDef,
    PaginationState,
    Table,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'

import { makeData, Person } from './makeData'

export default function Example1() {
    const columns = React.useMemo<ColumnDef<Person>[]>(
        () => [
            {
                accessorFn: row => row.firstName,
                id: 'firstName',
                cell: info => info.getValue(),
                header: () => "First Name",
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row.lastName,
                id: 'lastName',
                cell: info => info.getValue(),
                header: () => "Last Name",
                footer: props => props.column.id,
            },
            {
                accessorKey: 'age',
                header: () => 'Age',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'visits',
                header: () => "Visits",
                footer: props => props.column.id,
            },
            {
                accessorKey: 'status',
                header: "Status",
                footer: props => props.column.id,
            },
            {
                accessorKey: 'progress',
                header: "Profile Progress",
                footer: props => props.column.id,
            },
        ],
        []
    )

    const [data, ] = React.useState(() => makeData(100000))

    return (
        <>
            <MyTable
                {...{
                    data,
                    columns,
                }}
            />
        </>
    )
}

function MyTable({
     data,
     columns,
 }: {
    data: Person[]
    columns: ColumnDef<Person>[]
}) {
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const table = useReactTable({
        columns,
        data,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    })

    return (
        <div className="grow content" role="content">
            <div className="container-fixed">
                <div className="datatable-initialized">
                    <div className="scrollable-x-auto">
                        <div className="h-2"/>
                        <table className="table table-auto table-border align-middle text-gray-700 font-medium text-sm">
                            <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => {
                                        return (
                                            <th key={header.id} colSpan={header.colSpan}>
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {{
                                                        asc: <i className="ki-filled ki-up"></i>,
                                                        desc: <i className="ki-filled ki-down"></i>,
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                    {header.column.getCanFilter() ? (
                                                        <div>
                                                            <Filter column={header.column} table={table}/>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </th>
                                        )
                                    })}
                                </tr>
                            ))}
                            </thead>
                            <tbody>
                            {table.getRowModel().rows.map(row => {
                                return (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => {
                                            return (
                                                <td key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                        <div className="h-2"/>
                        <div
                            className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
                            <div className="flex items-center gap-2">
                                Show
                                <select
                                    className="select select-sm w-16"
                                    value={table.getState().pagination.pageSize}
                                    onChange={e => {
                                        table.setPageSize(Number(e.target.value))
                                    }}
                                >
                                    {[10, 20, 30, 40, 50].map(pageSize => (
                                        <option key={pageSize} value={pageSize}>
                                            {pageSize}
                                        </option>
                                    ))}
                                </select> per page
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex">
                                    <div>
                                        Page <strong>
                                        {table.getState().pagination.pageIndex + 1} of{' '}
                                        {table.getPageCount().toLocaleString()}
                                    </strong>
                                    </div>
                                </div>
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.firstPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    <i className="ki-filled ki-double-left"></i>
                                </button>
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    <i className="ki-filled ki-left"></i>
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    max={table.getPageCount()}
                                    defaultValue={table.getState().pagination.pageIndex + 1}
                                    onChange={e => {
                                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                                        table.setPageIndex(page)
                                    }}
                                    className="input"
                                />
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    <i className="ki-filled ki-right"></i>
                                </button>
                                <button
                                    className="border rounded p-1"
                                    onClick={() => table.lastPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    <i className="ki-filled ki-double-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Filter({
                    column,
                    table,
                }: {
    column: Column<any, any>
    table: Table<any>
}) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    return typeof firstValue === 'number' ? (
        <div className="flex space-x-2" onClick={e => e.stopPropagation()}>
            <input
                className="input"
                type="number"
                value={(columnFilterValue as [number, number])?.[0] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        e.target.value,
                        old?.[1],
                    ])
                }
                placeholder={`Min`}
            />
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[1] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        old?.[0],
                        e.target.value,
                    ])
                }
                placeholder={`Max`}
                className="input"
            />
        </div>
    ) : (
        <input
            className="input"
            onChange={e => column.setFilterValue(e.target.value)}
            onClick={e => e.stopPropagation()}
            placeholder={`Search...`}
            type="text"
            value={(columnFilterValue ?? '') as string}
        />
    )
}
