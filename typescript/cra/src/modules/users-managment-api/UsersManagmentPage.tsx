import {ChangeEvent, useMemo, useState} from 'react';
import { User } from "./core/_models";
import { toAbsoluteUrl } from "utils";
import {useNavigate} from "react-router";
import { headCells } from "./core/headCellConfiguration";
import { Order } from "./@types/sort";
import { EnhancedTableHead } from "./components/EnhancedTableHead";
import { AlertDialog } from "./components/AlertDialog";
import {
    Avatar,
    Button,
    SelectChangeEvent,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Paper,
    Checkbox,
    FormControlLabel,
    Switch,
} from "@mui/material";
import {EditUserDialog} from "./components/EditUserDialog";
import {useQueryResponseData, useQueryResponsePagination} from "./core/QueryResponseProvider";
import {useQueryRequest} from "./core/QueryRequestProvider";
import {useListView} from "./core/ListViewProvider";
import {EnhancedTableToolbar} from "./components/EnhancedTableToolbar";

function UsersManagementPageAPI() {
    const users = useQueryResponseData()
    const {updateState} = useQueryRequest()
    const data = useMemo(() => users, [users])
    const pagination = useQueryResponsePagination()
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof User>('role');
    const [dense, setDense] = useState(false);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [userToDeleteId, setUserToDeleteId] = useState<number | string>(1);
    const [open2, setOpen2] = useState(false);
    const [userToEditId, setUserToEditId] = useState<number | string>(1);
    const [ roleFilter, setRoleFilter ] = useState<string>("all");
    const [ nameFilter, setNameFilter ] = useState<string | null>(null);

    const {selected, onSelect} = useListView()

    const isSelected = (id:string) => {
        return selected.includes(id);
    }

    // -------------------

    const handleClickOpen = (id:number|string) => {
        setUserToDeleteId(id);
        setOpen(true);
    };
    const handleClickOpe2 = (id:number|string) => {
        console.log(id);
        setUserToEditId(id);
        setOpen2(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleUserDelete = (id:number|string) => {
        const rowsWithDeletes = data.filter((row) => row.id !== id);
        handleClose();
    }
    const handleSelectedUsersDelete = () => {
        const rowsWithDeletes = data.filter((row) => !selected.includes(row.id));
    }
    const handleRequestSort = (
        event: React.FormEvent<unknown>,
        property: keyof User | null,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');

        if (property){
            setOrderBy(property);
        }

        updateState({sort: orderBy, order: order})
    };
    const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = data.map((n) => n.id);
            return;
        }
    };
    const handleRoleFilterChange:(event: SelectChangeEvent) => void = (e:SelectChangeEvent) => {
        setRoleFilter(e.target.value);
    }
    const handleNameFilterChange:(event: ChangeEvent<HTMLInputElement>) => void = (e:ChangeEvent<HTMLInputElement>) => {
        setNameFilter(e.target.value);
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(newPage);
        setPage(newPage+1);
        updateState({page:newPage+1})
    };
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        updateState({items_per_page: event.target.value as unknown as 10 | 30 | 50 | 100})
    };
    const handleUserEdit = (id:number|string) => {
        navigate(`/edit/user/${id}`)
    }
    const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    // -------------------

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, mt: 10 }}>
                <EnhancedTableToolbar numSelected={selected.length} handleRoleFilterChange={handleRoleFilterChange} roleFilter={roleFilter} handleNameFilterChange={handleNameFilterChange} nameFilter={nameFilter} handleSelectedUsersDelete={handleSelectedUsersDelete} />
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
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={pagination.total}
                        />
                        <TableBody>
                            {data.map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isSelected(row.id)}
                                            tabIndex={-1}
                                            key={row.name}
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
                                                    <Avatar alt={row.name} src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />

                                                    <Box sx={{
                                                        verticalAlign: 'middle',
                                                        marginTop: 'auto',
                                                        marginBottom: 'auto',
                                                        marginLeft: '5px',
                                                    }}>
                                                        {row.name}
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.role}</TableCell>
                                            <TableCell align="left">{String(row.online)}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">
                                                <Button onClick={(e)=>handleUserEdit(row.id)}>Edit</Button>
                                                <Button onClick={(e)=>handleClickOpe2(row.id)}>Edit in Modal</Button>
                                                <Button onClick={(e)=>handleClickOpen(row.id)}>Delete</Button>
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
                        count={pagination.total}
                        rowsPerPage={Number(pagination.items_per_page)}
                        page={page-1}
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
            </Paper>
            <AlertDialog open={open} handleClose={handleClose} handleDelete={handleUserDelete} userId={userToDeleteId}></AlertDialog>
            <EditUserDialog open={open2} handleClose={handleClose2} userId={userToEditId}></EditUserDialog>
        </Box>
    );
}

export { UsersManagementPageAPI }