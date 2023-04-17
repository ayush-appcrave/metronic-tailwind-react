import {
  alpha,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { ChangeEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

interface EnhancedTableToolbarProps {
  numSelected: number;
  roleFilter: string | undefined;
  handleRoleFilterChange: (event: SelectChangeEvent) => void;
  nameFilter: string | null;
  handleNameFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSelectedUsersDelete: () => void;
  sx?: SxProps<Theme>;
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
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        }),
        ...props.sx
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <FormControl
          size="small"
          sx={{
            width: '50%'
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.roleFilter ? props.roleFilter : 'all'}
            sx={{
              margin: '10px'
            }}
            defaultValue={'all'}
            onChange={props.handleRoleFilterChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
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
        <TextField
          size="small"
          onChange={props.handleNameFilterChange}
          sx={{
            margin: '10px',
            width: '50%'
          }}
          id="search"
          label="Search name"
          variant="outlined"
        />
      )}
    </Toolbar>
  );
}

export { EnhancedTableToolbar };
