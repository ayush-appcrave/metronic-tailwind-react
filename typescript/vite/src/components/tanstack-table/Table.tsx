import {Person} from "@/pages/crud/makeData.ts";
import {
    ColumnDef, flexRender,
    getCoreRowModel,
    getFilteredRowModel, getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    useReactTable
} from "@tanstack/react-table";
import React from "react";
import {Filter} from "@/components/tanstack-table/ColumnFilter.tsx";
import {TableFooter} from "@/components/tanstack-table/TableFooter.tsx";

function Table({
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
                        <TableFooter table={table} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;