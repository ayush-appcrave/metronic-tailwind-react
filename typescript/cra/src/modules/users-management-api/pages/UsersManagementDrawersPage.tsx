import { type ChangeEvent, useState } from 'react';

import { Button, type SelectChangeEvent, Box, Paper } from '@mui/material';
import { UserManagementTableContainer } from '../components/UserManagementTableContainer';

import { useQueryResponse } from '../core/QueryResponseProvider';
import { CreateUserDrawer } from '../components/create-user/CreateUserDrawer';
import { useQueryRequest } from '../core/QueryRequestProvider';
import { useListView } from '../core/ListViewProvider';
import { EnhancedTableToolbar } from '../components/EnhancedTableToolbar';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSelectedUsers } from '../core/_requests';
import { QUERIES } from '../helpers';
import { UpdateUserDrawer } from '../components/edit-user/UpdateUserDrawer';
import { ViewUserDrawer } from '../components/view/ViewUserDrawer';

function UsersManagementDrawersPage() {
  const { updateState } = useQueryRequest();
  const [open4, setOpen4] = useState(false);
  const [openUpdateDrawerState, setOpenUpdateDrawerState] = useState<boolean>(false);
  const [openViewDrawerState, setOpenViewDrawerState] = useState<boolean>(false);
  const [updateUserIdState, setUpdateUserIdState] = useState('-1');
  const [viewUserIdState, setViewUserIdState] = useState('-1');
  const [roleFilter, setRoleFilter] = useState<'user' | 'admin' | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const { query } = useQueryResponse();

  const { clearSelected, selected } = useListView();

  const deleteSelectedItems = useMutation(
    async () => {
      await deleteSelectedUsers(selected as string[]);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        clearSelected();
      }
    }
  );

  // -------------------

  const handleClickOpe4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleRoleFilterChange: (event: SelectChangeEvent) => void = (e: SelectChangeEvent) => {
    if (e.target.value !== 'all') {
      setRoleFilter(e.target.value as 'user' | 'admin');
      updateState({ role: e.target.value as 'user' | 'admin' }, true);
    } else {
      setRoleFilter(undefined);
      updateState({ role: undefined }, true);
    }
  };
  const handleNameFilterChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNameFilter(e.target.value);
    updateState({ search: e.target.value }, true);
  };
  // -------------------

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, mt: 10, position: 'relative', paddingTop: '40px' }}>
        <Button
          sx={{
            position: 'absolute',
            top: 2,
            right: 20
          }}
          onClick={(e) => {
            handleClickOpe4();
          }}>
          Add new user
        </Button>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleRoleFilterChange={handleRoleFilterChange}
          roleFilter={roleFilter}
          handleNameFilterChange={handleNameFilterChange}
          nameFilter={nameFilter}
          handleSelectedUsersDelete={() => {
            deleteSelectedItems.mutateAsync();
          }}
        />
        <UserManagementTableContainer denseKey="DRAWERS">
          {(id) => (
            <Box
              sx={{
                display: 'flex'
              }}>
              <Button
                onClick={(e) => {
                  setUpdateUserIdState(id);
                  setOpenUpdateDrawerState(true);
                }}>
                Edit
              </Button>
              <Button
                onClick={(e) => {
                  setViewUserIdState(id);
                  setOpenViewDrawerState(true);
                }}>
                View
              </Button>
            </Box>
          )}
        </UserManagementTableContainer>
      </Paper>
      <CreateUserDrawer open={open4} handleClose={handleClose4}></CreateUserDrawer>
      <UpdateUserDrawer
        open={openUpdateDrawerState}
        userId={updateUserIdState}
        handleClose={() => {
          setOpenUpdateDrawerState(false);
        }}></UpdateUserDrawer>
      <ViewUserDrawer
        open={openViewDrawerState}
        userId={viewUserIdState}
        handleClose={() => {
          setOpenViewDrawerState(false);
        }}></ViewUserDrawer>
    </Box>
  );
}

export { UsersManagementDrawersPage };
