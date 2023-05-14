import {
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
  Toolbar
} from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';
import React, { type ChangeEvent, useState } from 'react';
import { useQueryRequest } from '../core/QueryRequestProvider';
import { useListView } from '../core/ListViewProvider';

interface EnhancedTableToolbarProps {
  sx?: SxProps<Theme>;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { updateState } = useQueryRequest();
  const [roleFilter, setRoleFilter] = useState<'user' | 'admin' | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string>('');

  const { selected } = useListView();

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
        ...props.sx
      }}
    >
      <FormControl
        size="small"
        sx={{
          width: '50%'
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={roleFilter ?? 'all'}
          sx={{
            margin: '10px'
          }}
          defaultValue={'all'}
          onChange={handleRoleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>
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
    </Toolbar>
  );
}

export { EnhancedTableToolbar };
