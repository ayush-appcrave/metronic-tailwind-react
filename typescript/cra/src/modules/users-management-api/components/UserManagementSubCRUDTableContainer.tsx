import {
    Avatar,
    Box, Collapse, FormControlLabel, IconButton, Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow, Typography
} from "@mui/material";
import {EnhancedSubCRUDTableHead} from "./EnhancedSubCRUDTableHead";
import CircularProgress from "@mui/material/CircularProgress";
import {toAbsoluteUrl} from "utils";
import {headCells} from "../core/headCellConfiguration";
import {ChangeEvent, useEffect, useMemo, useState} from "react";
import {User} from "../core/_models";
import {useListView} from "../core/ListViewProvider";
import {Order} from "../@types/sort";
import {useQueryResponseData, useQueryResponseLoading, useQueryResponsePagination} from "../core/QueryResponseProvider";
import {useQueryRequest} from "../core/QueryRequestProvider";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StaticDataTableCRUD } from "./static-table/StaticDataTableCRUD";

type Props = {
    children: (id:string) => React.ReactNode
}

type RowProps = {
    row:User,
    children: (id:string) => React.ReactNode
}

const UserManagementSubCRUDTableRow = (props: RowProps) => {
    const [subCRUDVisibilityState, setSubCRUDVisibilityState] = useState(false);

    return <>
        <TableRow
            hover
            role="checkbox"
            tabIndex={-1}
            key={props.row.id}
        >
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setSubCRUDVisibilityState(!subCRUDVisibilityState)}
                >
                    {subCRUDVisibilityState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell
                component="th"
                scope="row"
                padding="none"
            >
                <Box sx={{
                    display: 'flex',
                }}>
                    <Avatar alt={props.row.first_name} src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />

                    <Box sx={{
                        verticalAlign: 'middle',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: '5px',
                    }}>
                        {props.row.id}--{props.row.first_name}
                    </Box>
                </Box>
            </TableCell>
            <TableCell align="left">{props.row.last_name}</TableCell>
            <TableCell align="left">{props.row.role}</TableCell>
            <TableCell align="left">{props.row.status}</TableCell>
            <TableCell align="left">{props.row.two_steps_auth}</TableCell>
            <TableCell align="left">{props.row.created_at}</TableCell>
            <TableCell align="left">
                {props.children(props.row.id)}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                <Collapse in={subCRUDVisibilityState} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            History
                        </Typography>
                        <StaticDataTableCRUD></StaticDataTableCRUD>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </>
}

const UserManagementSubCRUDTableContainer = (props: Props) => {
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
    const { onSelectAll, selected} = useListView()

    useEffect(()=>{
        updateState({sort: orderBy, order: order})
    }, [order, orderBy]);

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
                <EnhancedSubCRUDTableHead
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
                        return (
                            <UserManagementSubCRUDTableRow row={row} children={props.children}></UserManagementSubCRUDTableRow>
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

export { UserManagementSubCRUDTableContainer }