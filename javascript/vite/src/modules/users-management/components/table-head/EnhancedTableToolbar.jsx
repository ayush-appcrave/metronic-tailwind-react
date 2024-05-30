import { FormControl, MenuItem, Select, TextField, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useQueryRequest } from '../../core';
function EnhancedTableToolbar(props) {
  const {
    updateState
  } = useQueryRequest();
  const [roleFilter, setRoleFilter] = useState(undefined);
  const [nameFilter, setNameFilter] = useState('');
  const handleRoleFilterChange = e => {
    if (e.target.value !== 'all') {
      setRoleFilter(e.target.value);
      updateState({
        role: e.target.value,
        page: 1
      }, true);
    } else {
      setRoleFilter(undefined);
      updateState({
        role: undefined,
        page: 1
      }, true);
    }
  };
  const handleNameFilterChange = e => {
    setNameFilter(e.target.value);
    updateState({
      search: e.target.value,
      page: 1
    }, true);
  };
  return <Toolbar sx={{
    px: {
      xs: 1,
      sm: 2
    },
    ...props.sx
  }}>
      <FormControl size="small" sx={{
      width: '50%'
    }}>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={roleFilter ?? 'all'} sx={{
        margin: '10px'
      }} defaultValue={'all'} onChange={handleRoleFilterChange}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>
      <TextField size="small" onChange={handleNameFilterChange} value={nameFilter} sx={{
      margin: '10px',
      width: '50%'
    }} id="search" label="Search name" variant="outlined" />
    </Toolbar>;
}
export { EnhancedTableToolbar };