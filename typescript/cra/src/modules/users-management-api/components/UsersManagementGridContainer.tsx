import * as React from 'react';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridRenderCellParams,
  GridSortModel
} from '@mui/x-data-grid';
import { useMemo } from 'react';
import { useQueryRequest } from '../core/QueryRequestProvider';
import {
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination
} from '../core/QueryResponseProvider';
import { initialQueryState } from '../helpers';
import { UndoActions } from './UndoActions';
import UsersManagementActionsCell from './cells/UsersManagementActionsCell';
import { useSnackbar } from 'notistack';
import { restoreMultipleUsers } from '../core/_requests';
import { User } from '../core/_models';
import { Avatar, Box } from '@mui/material';
import { toAbsoluteUrl } from 'utils';

export function UsersManagementGridContainer() {
  const { updateState } = useQueryRequest();
  const pagination = useQueryResponsePagination();
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const isLoading = useQueryResponseLoading();
  const { refetch } = useQueryResponse();

  const { enqueueSnackbar } = useSnackbar();
  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

  const columns: GridColDef[] = [
    {
      headerName: 'First Name',
      field: 'first_name',
      flex: 2,
      renderCell: (props: GridRenderCellParams<User>) => {
        return (
          <Box
            sx={{
              display: 'flex'
            }}>
            {props.row.avatar && (
              <Avatar alt={props.row.first_name} src={toAbsoluteUrl(props.row.avatar)} />
            )}

            <Box
              sx={{
                verticalAlign: 'middle',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '5px'
              }}>
              {props.row.first_name}
            </Box>
          </Box>
        );
      }
    },
    {
      headerName: 'Last Name',
      field: 'last_name',
      flex: 2
    },
    {
      headerName: 'Role',
      field: 'role',
      flex: 1
    },
    {
      headerName: 'Status',
      field: 'status',
      flex: 1
    },
    {
      headerName: 'TSA',
      field: 'two_steps_auth',
      flex: 1
    },
    {
      headerName: 'Created At',
      field: 'created_at',
      flex: 1
    },
    {
      headerName: 'Actions',
      field: 'actions',
      renderCell: (props: GridRenderCellParams<User>) => {
        return (
          <UsersManagementActionsCell
            id={props.row.id}
            deleteHandler={() => {
              enqueueSnackbar('User was deleted.', {
                action: (snackbarKey) => (
                  <UndoActions
                    snackbarKey={snackbarKey}
                    undoAction={undoAction}
                    ids={[props.row.id]}></UndoActions>
                ),
                anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                autoHideDuration: 7000
              });
            }}
          />
        );
      },
      flex: 1,
      disableColumnMenu: true,
      sortable: false
    }
  ];

  const handleRequestSort = (model: GridSortModel, details: GridCallbackDetails<any>) => {
    if (model.length) {
      updateState({ sort: model[0].field, order: model[0].sort ? model[0].sort : undefined }, true);
    }
  };

  const handleChangePage = (model: GridPaginationModel, details: GridCallbackDetails<any>) => {
    updateState({ page: model.page, items_per_page: model.pageSize }, true);
  };

  const handleFilterChange = (model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
    updateState({ advanced: model.items }, true);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        checkboxSelection
        rows={data}
        columns={columns}
        sortingMode="server"
        paginationMode="server"
        rowCount={pagination.total}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: initialQueryState.items_per_page,
              page: initialQueryState.page
            }
          }
        }}
        onSortModelChange={handleRequestSort}
        onPaginationModelChange={handleChangePage}
        onFilterModelChange={handleFilterChange}
        pageSizeOptions={[5, 10, 25]}
        loading={isLoading}
      />
    </div>
  );
}
