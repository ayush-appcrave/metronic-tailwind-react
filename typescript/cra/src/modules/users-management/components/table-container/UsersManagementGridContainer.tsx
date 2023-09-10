import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Box, IconButton } from '@mui/material';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterItem,
  GridFilterModel,
  GridPaginationModel,
  GridRenderCellParams,
  GridRowSelectionModel,
  GridSortModel,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import { useEffect, useMemo, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toAbsoluteUrl } from 'utils';

import {
  deleteSelectedUsers,
  restoreMultipleUsers,
  useListView,
  useQueryRequest,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination,
  User
} from '../../core';
import { initialQueryRequest, initialQueryState, QUERIES } from '../../helpers';
import { AlertDialogDeleteMultiple, UndoActions, UsersManagementActionsCell } from '..';

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
  const filter: GridFilterItem[] = [];
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
        return <UsersManagementActionsCell id={props.row.id} />;
      },
      flex: 1,
      disableColumnMenu: true,
      sortable: false
    }
  ];

  useEffect(() => {
    return () => {
      updateState(initialQueryRequest.state);
    };
  }, []);

  const handleRequestSort = (model: GridSortModel, details: GridCallbackDetails<any>) => {
    if (model.length) {
      // eslint-disable-next-line
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
          rows={data}
          columns={columns}
          checkboxSelection
          slots={{
            toolbar: () => {
              return (
                <DataToolbar
                  hasSelectedRows={selectionModel.length > 0}
                  deleteHandler={() => {
                    setOpenDialogState(true);
                  }}
                />
              );
            }
          }}
          sortingMode="server"
          paginationMode="server"
          rowCount={pagination.total ?? 0}
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
        ></DataGrid>
      </div>
      <AlertDialogDeleteMultiple
        open={openDialogState}
        agreeHandler={() => {
          setOpenDialogState(false);
          deleteSelectedItems.mutateAsync(undefined, undefined);
        }}
        closeHandler={() => {
          setOpenDialogState(false);
        }}
      ></AlertDialogDeleteMultiple>
    </>
  );
}
