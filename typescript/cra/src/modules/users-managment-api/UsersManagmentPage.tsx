import {ChangeEvent, useEffect, useMemo, useState} from 'react';

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
import CircularProgress from '@mui/material/CircularProgress';

import {
    useQueryResponse,
    useQueryResponseData,
    useQueryResponseLoading,
    useQueryResponsePagination
} from "./core/QueryResponseProvider";
import {UpdateUserDialog} from "./components/edit-user/UpdateUserDialog";
import { CreateUserDrawer } from "./components/create-user/CreateUserDrawer";
import {useQueryRequest} from "./core/QueryRequestProvider";
import { toAbsoluteUrl } from "utils";
import { User } from "./core/_models";
import { Order } from "./@types/sort";
import {useNavigate} from "react-router";
import { headCells } from "./core/headCellConfiguration";
import { EnhancedTableHead } from "./components/EnhancedTableHead";
import { AlertDialog } from "./components/AlertDialog";
import {CreateUserDialog} from "./components/create-user/CreateUserDialog";
import {useListView} from "./core/ListViewProvider";
import {EnhancedTableToolbar} from "./components/EnhancedTableToolbar";
import {useMutation, useQueryClient} from "react-query";
import {deleteSelectedUsers} from "./core/_requests";
import {QUERIES} from "./helpers";

function UsersManagementPage() {
    const users = useQueryResponseData()
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
    const {updateState} = useQueryRequest()
    const data = useMemo(() => users, [users])
    const pagination = useQueryResponsePagination()
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof User>('created_at');
    const [dense, setDense] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [userToDeleteId, setUserToDeleteId] = useState<string>("1");
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [userToEditId, setUserToEditId] = useState<string>("");
    const [ roleFilter, setRoleFilter ] = useState<"user" | "admin" | undefined>(undefined);
    const [ nameFilter, setNameFilter ] = useState<string | null>(null);
    const queryClient = useQueryClient()
    const {query} = useQueryResponse()

    const { onSelectAll, clearSelected, selected, onSelect} = useListView()

    const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected as string[]), {
        // 💡 response of the mutation is passed to onSuccess
        onSuccess: () => {
            // ✅ update detail view directly
            queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
            clearSelected()
        },
    })

    const isSelected = (id:string) => {
        return selected.includes(id);
    }

    // -------------------

    const handleClickOpen = (id:string) => {
        setUserToDeleteId(id);
        setOpen(true);
    };
    const handleClickOpe2 = (id:string|undefined) => {
        setOpen2(true);
    };
    const handleClickOpe3 = (id:string) => {
        setUserToEditId(id);
        setOpen3(true);
    };
    const handleClickOpe4 = () => {
        setOpen4(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };
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

    useEffect(()=>{
        updateState({sort: orderBy, order: order})
    }, [order, orderBy]);

    const handleRoleFilterChange:(event: SelectChangeEvent) => void = (e:SelectChangeEvent) => {
        if(e.target.value !== "all"){
            setRoleFilter(e.target.value as "user" | "admin");
            updateState({role: e.target.value as "user" | "admin"})
        } else {
            setRoleFilter(undefined);
            updateState({role: undefined})
        }
    }
    const handleNameFilterChange:(event: ChangeEvent<HTMLInputElement>) => void = (e:ChangeEvent<HTMLInputElement>) => {
        setNameFilter(e.target.value);
        updateState({search: e.target.value})
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(newPage+1);
        updateState({ page: newPage+1})
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
            <Paper sx={{ width: '100%', mb: 2, mt: 10, position: "relative", paddingTop: "40px" }}>
                <Button sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                }} onClick={(e)=> handleClickOpe2(undefined)}>Add new user (Modal)</Button>
                <Button sx={{
                    position: "absolute",
                    top: 2,
                    right: 200,
                }} onClick={(e)=> handleClickOpe4()}>Add new user (Drawer)</Button>
                <EnhancedTableToolbar numSelected={selected.length} handleRoleFilterChange={handleRoleFilterChange} roleFilter={roleFilter} handleNameFilterChange={handleNameFilterChange} nameFilter={nameFilter} handleSelectedUsersDelete={async () => await deleteSelectedItems.mutateAsync()} />
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
                                            <TableCell align="left">{String(false)}</TableCell>
                                            <TableCell align="left">{row.created_at}</TableCell>
                                            <TableCell align="left">
                                                <Button onClick={(e)=>handleUserEdit(row.id)}>Edit</Button>
                                                <Button onClick={(e)=>handleClickOpe3(row.id)}>Edit in Modal</Button>
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
            </Paper>
            <AlertDialog open={open} handleClose={handleClose} userId={userToDeleteId.toString()}></AlertDialog>
            <CreateUserDialog open={open2} handleClose={handleClose2}></CreateUserDialog>
            <CreateUserDrawer open={open4} handleClose={handleClose4}></CreateUserDrawer>
            <UpdateUserDialog open={open3} handleClose={handleClose3} userId={userToEditId}></UpdateUserDialog>
        </Box>
    );
}

export { UsersManagementPage }