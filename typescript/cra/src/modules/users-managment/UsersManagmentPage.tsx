import {ChangeEvent, FormEvent, useState} from 'react';
import { Data, rowsData } from "./helpers/users";
import { toAbsoluteUrl } from "utils";
import {useNavigate} from "react-router";
import { headCells } from "./helpers/headCellConfiguration";
import { Order } from "./@types/sort";
import { EnhancedTableHead } from "./components/EnhancedTableHead";
import { AlertDialog } from "./components/AlertDialog";
import {EnhancedTableToolbar} from "./components/EnhancedTableToolbar";
import {
    getComparator,
    stableSort,
    filterRow,
} from "./helpers/tableSortAndFilterHelpers";
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

function UsersManagementPage() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Data>('company');
    const [selected, setSelected] = useState<readonly (number | string)[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState<Data[]>(rowsData);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [userToDeleteId, setUserToDeleteId] = useState<number | string>(1);
    const [open2, setOpen2] = useState(false);
    const [userToEditId, setUserToEditId] = useState<number | string>(1);
    const [ roleFilter, setRoleFilter ] = useState<string>("all");
    const [ nameFilter, setNameFilter ] = useState<string | null>(null);

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
        const rowsWithDeletes = rows.filter((row) => row.id !== id);
        setSelected([]);
        setRows([...rowsWithDeletes]);
        handleClose();
    }
    const handleSelectedUsersDelete = () => {
        const rowsWithDeletes = rows.filter((row) => !selected.includes(row.id));
        setSelected([]);
        setRows([...rowsWithDeletes]);
    }
    const handleRequestSort = (
        event: React.FormEvent<unknown>,
        property: keyof Data | null,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');

        if (property){
            setOrderBy(property);
        }
    };
    const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };
    const handleRoleFilterChange:(event: SelectChangeEvent) => void = (e:SelectChangeEvent) => {
        setRoleFilter(e.target.value);
        setPage(0);
    }
    const handleNameFilterChange:(event: ChangeEvent<HTMLInputElement>) => void = (e:ChangeEvent<HTMLInputElement>) => {
        setNameFilter(e.target.value);
        setPage(0);
    }
    const handleClick = (event: React.FormEvent<unknown>, id: number | string) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly (number | string)[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleUserEdit = (id:number|string) => {
        navigate(`/edit/user/${id}`)
    }
    const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    // -------------------

    const isSelected = (id: number | string) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(filterRow(rows, roleFilter, nameFilter), getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    onInput={(event) => handleClick(event, row.id)}
                                                    checked={isItemSelected}
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
                                            <TableCell align="left">{row.company}</TableCell>
                                            <TableCell align="left">{row.role}</TableCell>
                                            <TableCell align="left">{String(row.verified)}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
                                            <TableCell align="left">
                                                <Button onClick={(e)=>handleUserEdit(row.id)}>Edit</Button>
                                                <Button onClick={(e)=>handleClickOpe2(row.id)}>Edit in Modal</Button>
                                                <Button onClick={(e)=>handleClickOpen(row.id)}>Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                            {rows.length <= 0 && (
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
                        count={filterRow(rows, roleFilter, nameFilter).length}
                        rowsPerPage={rowsPerPage}
                        page={page}
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

export { UsersManagementPage }