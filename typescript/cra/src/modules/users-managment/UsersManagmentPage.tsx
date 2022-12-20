import {ChangeEvent, useState} from 'react';
import { Data, rowsData } from "./users";
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import {toAbsoluteUrl} from "utils";
import {
    Avatar,
    Button,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import {useNavigate} from "react-router";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: string },
    b: { [key in Key]: string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: Data[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function filterRow(array: Data[], roleFilter:string, nameFilter:string|null):Data[]{
    let filteredItems = array;

    if(roleFilter!=='all'){
        filteredItems = filteredItems.filter((row) => row.role === roleFilter);
    }

    if(nameFilter!==null){
        filteredItems = filteredItems.filter((row) => row.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1);
    }


    return filteredItems;

}

interface HeadCell {
    disablePadding?: boolean;
    id: keyof Data | null;
    label?: string;
    numeric?: boolean;
    hideSortIcon?: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'company',
        numeric: false,
        disablePadding: false,
        label: 'Company',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role',
    },
    {
        id: 'verified',
        numeric: false,
        disablePadding: false,
        label: 'Verified',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    { id: null, hideSortIcon: true },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.FormEvent<unknown>, property: keyof Data | null) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data | null) => (event: React.FormEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            hideSortIcon={headCell.hideSortIcon}
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
    roleFilter: string | undefined;
    handleRoleFilterChange: (event: SelectChangeEvent) => void
    nameFilter: string | null;
    handleNameFilterChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleSelectedUsersDelete: () => void;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <FormControl sx={{
                    width: "50%"
                }}>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.roleFilter}
                        label="Role"
                        onChange={props.handleRoleFilterChange}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="Project Manager">Project Manager</MenuItem>
                        <MenuItem value="Full stack developer">Full stack developer</MenuItem>
                        <MenuItem value="Backend Developer">Backend Developer</MenuItem>
                    </Select>
                </FormControl>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={props.handleSelectedUsersDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <TextField sx={{width: "50%"}} onChange={props.handleNameFilterChange} value={props.nameFilter} id="search" label="Search name" variant="outlined" />
            )}
        </Toolbar>
    );
}

interface AlertDialogProps {
    open: boolean;
    handleClose: () => void
    userId: number | string;
    handleDelete: (id:number|string) => void
}

function AlertDialog(props:AlertDialogProps) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Are you sure you want to delete user with ID ${props.userId}?`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => props.handleClose()}>Disagree</Button>
                    <Button onClick={(e) => props.handleDelete(props.userId)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

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

    const handleClickOpen = (id:number|string) => {
        setUserToDeleteId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const [ roleFilter, setRoleFilter ] = useState<string>("all");
    const [ nameFilter, setNameFilter ] = useState<string | null>(null);

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

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleUserEdit = (id:number|string) => {
        navigate(`/edit/user/${id}`)
    }

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

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
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
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
                                                    <Avatar alt={"A"} src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />

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
        </Box>
    );
}

export { UsersManagementPage }