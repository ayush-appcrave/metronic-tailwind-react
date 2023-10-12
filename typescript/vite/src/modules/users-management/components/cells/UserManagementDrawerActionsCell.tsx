import { Box, Button } from '@mui/material';
import { UpdateUserDrawer, ViewUserDrawer } from 'modules/users-management';
import { useState } from 'react';

interface IUserManagementDrawerActionsCellProps {
  id: string;
}

function UserManagementDrawerActionsCell(props: IUserManagementDrawerActionsCellProps) {
  const [openUpdateDrawerState, setOpenUpdateDrawerState] = useState<boolean>(false);
  const [openViewDrawerState, setOpenViewDrawerState] = useState<boolean>(false);
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');

  return (
    <>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Button
          onClick={(e) => {
            setUpdateUserIdState(props.id);
            setOpenUpdateDrawerState(true);
          }}
        >
          Edit
        </Button>
        <Button
          onClick={(e) => {
            setViewUserIdState(props.id);
            setOpenViewDrawerState(true);
          }}
        >
          View
        </Button>
      </Box>

      <UpdateUserDrawer
        open={openUpdateDrawerState}
        userId={updateUserIdState}
        handleClose={() => {
          setOpenUpdateDrawerState(false);
        }}
      ></UpdateUserDrawer>
      <ViewUserDrawer
        open={openViewDrawerState}
        userId={viewUserIdState}
        handleClose={() => {
          setOpenViewDrawerState(false);
        }}
      ></ViewUserDrawer>
    </>
  );
}

export { UserManagementDrawerActionsCell };
