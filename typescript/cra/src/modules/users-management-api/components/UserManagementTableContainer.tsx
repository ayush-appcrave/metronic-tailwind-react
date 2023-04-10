import {
    Avatar,
    Box,
    Checkbox, FormControlLabel, Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow
} from "@mui/material";
import {EnhancedTableHead} from "./EnhancedTableHead";
import CircularProgress from "@mui/material/CircularProgress";
import {toAbsoluteUrl} from "utils";
import {headCells} from "../core/headCellConfiguration";
import {ChangeEvent, useEffect, useMemo, useState} from "react";
import {User} from "../core/_models";
import {useListView} from "../core/ListViewProvider";
import {Order} from "../@types/sort";
import {useQueryResponseData, useQueryResponseLoading, useQueryResponsePagination} from "../core/QueryResponseProvider";
import {useQueryRequest} from "../core/QueryRequestProvider";

type Props = {
    children: (id:string) => React.ReactNode
}

const UserManagementTableContainer = (props: Props) => {
    const {updateState} = useQueryRequest()
    const users = useQueryResponseData()
    const data = useMemo(() => users, [users])

    const isLoading = useQueryResponseLoading()
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        if(isLoading){
            setLoading(true)
            setTimeout(()=>{
                setLoading(false);
            }, 500)
        }
    }, [isLoading])

    const pagination = useQueryResponsePagination()
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof User>('created_at');
    const [dense, setDense] = useState(false);
    const { onSelectAll, selected, onSelect} = useListView()

    useEffect(()=>{
        updateState({sort: orderBy, order: order})
    }, [order, orderBy]);

    const isSelected = (id:string) => {
        return selected.includes(id);
    }

    const handleRequestSort = (
        event: React.FormEvent<unknown>,
        property: keyof User | null,
    ) => {
        if (property){
            setOrderBy(property);
        }
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(newPage+1);
        updateState({ page: newPage+1})
    };
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        updateState({items_per_page: event.target.value as unknown as 10 | 30 | 50 | 100})
    };
    const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    return <>
        <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
            >
                <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={onSelectAll}
                    onRequestSort={handleRequestSort}
                    rowCount={pagination?.total}
                />
                <TableBody sx={{
                    position: "relative"
                }}>
                    {loading && <CircularProgress sx={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                    }}/>}
                    {data.map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow
                                hover
                                role="checkbox"
                                aria-checked={isSelected(row.id)}
                                tabIndex={-1}
                                key={row.id}
                                selected={isSelected(row.id)}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        onInput={(event) => onSelect(row.id)}
                                        checked={isSelected(row.id)}
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </TableCell>
                                <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                >
                                    <Box sx={{
                                        display: 'flex',
                                    }}>
                                        <Avatar alt={row.first_name} src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />

                                        <Box sx={{
                                            verticalAlign: 'middle',
                                            marginTop: 'auto',
                                            marginBottom: 'auto',
                                            marginLeft: '5px',
                                        }}>
                                            {row.id}--{row.first_name}
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="left">{row.last_name}</TableCell>
                                <TableCell align="left">{row.role}</TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                                <TableCell align="left">{row.two_steps_auth}</TableCell>
                                <TableCell align="left">{row.created_at}</TableCell>
                                <TableCell align="left">
                                    {props.children(row.id)}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    {pagination.total <= 0 && (
                        <TableRow>
                            <TableCell colSpan={headCells.length}>No data found</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        <Box sx={{ position: 'relative' }}>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={pagination?.total}
                rowsPerPage={Number(pagination.items_per_page)}
                page={pagination.current_page ? pagination.current_page -1 : 0}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <FormControlLabel
                sx={{
                    display: 'inline-flex',
                    position: 'absolute',
                    marginTop: '9px',
                    marginLeft: '0',
                    top: 0,
                }}

                label="Dense"
                control={<Switch checked={dense} onChange={handleChangeDense} />}
            />
        </Box>
    </>
}

export { UserManagementTableContainer }