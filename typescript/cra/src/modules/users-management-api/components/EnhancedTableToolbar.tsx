import {
  alpha,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';
import { type ChangeEvent, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQueryRequest } from '../core/QueryRequestProvider';

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSelectedUsersDelete: () => void;
  sx?: SxProps<Theme>;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  const { updateState } = useQueryRequest();
  const [roleFilter, setRoleFilter] = useState<'user' | 'admin' | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string | null>(null);

  const handleRoleFilterChange: (event: SelectChangeEvent) => void = (e: SelectChangeEvent) => {
    if (e.target.value !== 'all') {
      setRoleFilter(e.target.value as 'user' | 'admin');
      updateState({ role: e.target.value as 'user' | 'admin', page: 1 }, true);
    } else {
      setRoleFilter(undefined);
      updateState({ role: undefined, page: 1 }, true);
    }
  };
  const handleNameFilterChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNameFilter(e.target.value);
    updateState({ search: e.target.value, page: 1 }, true);
  };

  return (
    <Toolbar
      sx={{
        px: { xs: 1, sm: 2 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        }),
        ...props.sx
      }}>
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <FormControl
          size="small"
          sx={{
            width: '50%'
          }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roleFilter ?? 'all'}
            sx={{
              margin: '10px'
            }}
            defaultValue={'all'}
            onChange={handleRoleFilterChange}>
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
          onChange={handleNameFilterChange}
          value={nameFilter}
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
