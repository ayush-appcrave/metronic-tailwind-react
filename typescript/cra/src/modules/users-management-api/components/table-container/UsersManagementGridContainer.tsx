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
  GridRowSelectionModel,
  GridFilterItem
} from '@mui/x-data-grid';
import { IconButton, Avatar, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useMemo, useState } from 'react';
import {
  useQueryRequest,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination,
  deleteSelectedUsers,
  restoreMultipleUsers,
  User,
  useListView
} from '../../core';
import { initialQueryRequest, initialQueryState, QUERIES, UserQueryState } from '../../helpers';
import {
  UndoActions,
  UsersManagementActionsCell,
  AlertDialogDeleteMultiple
} from '../../components';
import { useSnackbar } from 'notistack';
import { toAbsoluteUrl } from 'utils';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation } from 'react-router';
import qs from 'qs';

interface Props {
  deleteHandler: () => void;
  hasSelectedRows: boolean;
}

function DataToolbar(props: Props) {
  return (
    <GridToolbarContainer>
      <Actions deleteHandler={props.deleteHandler} hasSelectedRows={props.hasSelectedRows} />
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

function Actions(props: Props) {
  return (
    <>
      <IconButton
        disabled={!props.hasSelectedRows}
        onClick={() => {
          props.deleteHandler();
        }}
      >
        <DeleteIcon color={props.hasSelectedRows ? 'error' : 'disabled'} />
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
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  let filter: GridFilterItem[] = [];
  const [openDialogState, setOpenDialogState] = useState(false);

  const { query, refetch } = useQueryResponse();
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();
  const { clearSelected } = useListView();

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

  const deleteSelectedItems = useMutation(
    async () => {
      await deleteSelectedUsers(selectionModel as string[]);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        enqueueSnackbar(`${selectionModel.length} users was deleted.`, {
          action: (snackbarKey) => (
            <UndoActions
              ids={selectionModel as string[]}
              snackbarKey={snackbarKey}
              undoAction={undoAction}
            ></UndoActions>
          ),
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 7000
        });
        clearSelected();
      }
    }
  );

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
            }}
          >
            {props.row.avatar && (
              <Avatar alt={props.row.first_name} src={toAbsoluteUrl(props.row.avatar)} />
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
                    ids={[props.row.id]}
                  ></UndoActions>
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

  const location = useLocation();
  useEffect(() => {
    const queryParams: UserQueryState = qs.parse(location.search, {
      parseArrays: false,
      ignoreQueryPrefix: true
    });
    if (queryParams.advanced) {
      filter = queryParams.advanced;
    }
    updateState(queryParams);

    return () => {
      updateState(initialQueryRequest.state);
    };
  }, []);

  const handleRequestSort = (model: GridSortModel, details: GridCallbackDetails<any>) => {
    if (model.length) {
      updateState({ sort: model[0].field, order: model[0].sort ? model[0].sort : undefined }, true);
    }
  };

  const handleChangePage = (model: GridPaginationModel, details: GridCallbackDetails<any>) => {
    updateState({ page: model.page, items_per_page: model.pageSize }, true);
  };

  const handleFilterChange = (model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
    model.items.map((item) => delete item.id);
    updateState({ advanced: model.items }, true);
  };

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          checkboxSelection
          rows={data}
          columns={columns}
          slots={{ toolbar: DataToolbar }}
          slotProps={{
            toolbar: {
              deleteHandler: () => {
                setOpenDialogState(true);
              },
              hasSelectedRows: selectionModel.length > 0
            }
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
            },
            filter: {
              filterModel: {
                items: filter
              }
            }
          }}
          onRowSelectionModelChange={(newSelectionModel: GridRowSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          rowSelectionModel={selectionModel}
          onSortModelChange={handleRequestSort}
          onPaginationModelChange={handleChangePage}
          filterMode="server"
          onFilterModelChange={handleFilterChange}
          pageSizeOptions={[5, 10, 25]}
          loading={isLoading}
        />
      </div>
      <AlertDialogDeleteMultiple
        open={openDialogState}
        agreeHandler={() => {
          setOpenDialogState(false);
          deleteSelectedItems.mutateAsync();
        }}
        closeHandler={() => {
          setOpenDialogState(false);
        }}
      ></AlertDialogDeleteMultiple>
    </>
  );
}
