import { formatDate } from '@components/table';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Avatar, Box, Collapse, IconButton, TableCell, TableRow, Typography } from '@mui/material';
import { StaticDataTableCRUD, UsersManagementActionsCell } from 'modules/users-management';
import { useState } from 'react';

import { toAbsoluteUrl } from '../../../../utils/Assets';
import { User } from '../../core';

interface RowProps {
  row: User;
}

const UserManagementSubCRUDTableRow = (props: RowProps) => {
  const [subCRUDVisibilityState, setSubCRUDVisibilityState] = useState(false);

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={props.row.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setSubCRUDVisibilityState(!subCRUDVisibilityState);
            }}
          >
            {subCRUDVisibilityState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          <Box
            sx={{
              display: 'flex'
            }}
          >
            {props.row.avatar && (
              <Avatar
                alt={props.row.first_name ?? 'user avatar'}
                src={toAbsoluteUrl(props.row.avatar)}
              />
            )}

            <Box
              sx={{
                verticalAlign: 'middle',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '5px'
              }}
            >
              {props.row.first_name}
            </Box>
          </Box>
        </TableCell>
        <TableCell align="left">{props.row.last_name}</TableCell>
        <TableCell align="left">{props.row.role}</TableCell>
        <TableCell align="left">{props.row.status}</TableCell>
        <TableCell align="left">{props.row.two_steps_auth ? 'enabled' : 'disabled'}</TableCell>
        <TableCell align="left">{formatDate(props.row.created_at)}</TableCell>
        <TableCell align="left">
          <UsersManagementActionsCell id={props.row.id} />
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
  );
};

export { UserManagementSubCRUDTableRow };
