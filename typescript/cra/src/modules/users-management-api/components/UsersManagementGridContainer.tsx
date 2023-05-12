import * as React from 'react';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridRenderCellParams,
  GridSortModel,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridRowSelectionModel
} from '@mui/x-data-grid';
import { IconButton, Avatar, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMemo } from 'react';
import { useQueryRequest } from '../core/QueryRequestProvider';
import {
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination
} from '../core/QueryResponseProvider';
import { initialQueryState, QUERIES } from '../helpers';
import { UndoActions } from './UndoActions';
import UsersManagementActionsCell from './cells/UsersManagementActionsCell';
import { useSnackbar } from 'notistack';
import { deleteSelectedUsers, restoreMultipleUsers } from '../core/_requests';
import { User } from '../core/_models';
import { toAbsoluteUrl } from 'utils';
import { useMutation, useQueryClient } from 'react-query';
import { useListView } from '../core/ListViewProvider';

interface Props {
  selectionModel: GridRowSelectionModel;
}

function DataToolbar(props: Props) {
  return (
    <GridToolbarContainer>
      <Auctions selectionModel={props.selectionModel} />
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

function Auctions(props: Props) {
  const hasSelectedRows = props.selectionModel.length > 0;
  const { query, refetch } = useQueryResponse();
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();
  const { clearSelected } = useListView();
  const deleteSelectedItems = useMutation(
    async () => {
      await deleteSelectedUsers(props.selectionModel as string[]);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        enqueueSnackbar(`${props.selectionModel.length} users was deleted.`, {
          action: (snackbarKey) => (
            <UndoActions
              ids={props.selectionModel as string[]}
              snackbarKey={snackbarKey}
              undoAction={undoAction}></UndoActions>
          ),
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 7000
        });
        clearSelected();
      }
    }
  );

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

  return (
    <>
      <IconButton
        disabled={!hasSelectedRows}
        onClick={() => {
          deleteSelectedItems.mutateAsync();
        }}>
        <DeleteIcon color={hasSelectedRows ? 'error' : 'disabled'} />
      </IconButton>
    </>
  );
}

export function UsersManagementGridContainer() {
  const { updateState } = useQueryRequest();
  const pagination = useQueryResponsePagination();
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const isLoading = useQueryResponseLoading();
  const { refetch } = useQueryResponse();
  const [selectionModel, setSelectionModel] = React.useState<GridRowSelectionModel>([]);

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
        slots={{ toolbar: DataToolbar }}
        slotProps={{
          toolbar: { selectionModel }
        }}
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
        onRowSelectionModelChange={(newSelectionModel: GridRowSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        rowSelectionModel={selectionModel}
        onSortModelChange={handleRequestSort}
        onPaginationModelChange={handleChangePage}
        onFilterModelChange={handleFilterChange}
        pageSizeOptions={[5, 10, 25]}
        loading={isLoading}
      />
    </div>
  );
}
