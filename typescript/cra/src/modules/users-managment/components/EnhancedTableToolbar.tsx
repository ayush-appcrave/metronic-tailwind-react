import {
    alpha,
    FormControl, IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent, TextField,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {ChangeEvent} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

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

export { EnhancedTableToolbar }