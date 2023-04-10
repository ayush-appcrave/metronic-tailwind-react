import React, {ChangeEvent, useEffect, useState} from 'react';

import {
    Button,
    SelectChangeEvent,
    Box,
    Paper,
} from "@mui/material";
import { UserManagementTableContainer } from "./components/UserManagementTableContainer";

import {
    useQueryResponse,
    useQueryResponsePagination
} from "./core/QueryResponseProvider";
import { CreateUserDrawer } from "./components/create-user/CreateUserDrawer";
import {useQueryRequest} from "./core/QueryRequestProvider";
import {CreateUserStepperFormDialog} from "./components/create-user/CreateUserStepperFormDialog";
import { CreateUserPlainFormDialog } from "./components/create-user/CreateUserPlainFormDialog"
import { UpdateUserDialog } from "./components/edit-user/UpdateUserDialog";
import { ViewUserDialog } from "./components/view/ViewUserDialog";
import {useListView} from "./core/ListViewProvider";
import {EnhancedTableToolbar} from "./components/EnhancedTableToolbar";
import {useMutation, useQueryClient} from "react-query";
import {deleteSelectedUsers} from "./core/_requests";
import {QUERIES} from "./helpers";
import {AlertDialog} from "./components/AlertDialog";

function UsersManagementOverlayPage() {
    const {updateState} = useQueryRequest()
    const [open2, setOpen2] = useState(false);
    const [updateUserIdState, setUpdateUserIdState] = useState("-1");
    const [newUserOverlayModalOpenState, setNewUserOverlayModalOpenState] = useState(false);
    const [viewUserModalOpenState, setViewUserModalOpenState] = useState(false);
    const [openDeleteDialogState, setOpenDeleteDialogState] = useState(false);
    const [updateUserModalOpenState, setUpdateUserModalOpenState] = useState(false);
    const [deleteUserIdState, setDeleteUserIdState] = useState("-1");
    const [viewUserIdState, setViewUserIdState] = useState("-1");
    const [ roleFilter, setRoleFilter ] = useState<"user" | "admin" | undefined>(undefined);
    const [ nameFilter, setNameFilter ] = useState<string | null>(null);
    const queryClient = useQueryClient()
    const {query} = useQueryResponse()

    const { clearSelected, selected} = useListView()

    const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected as string[]), {
        // 💡 response of the mutation is passed to onSuccess
        onSuccess: () => {
            // ✅ update detail view directly
            queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
            clearSelected()
        },
    })

    // -------------------

    const handleClickOpe2 = (id:string|undefined) => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleRoleFilterChange:(event: SelectChangeEvent) => void = (e:SelectChangeEvent) => {
        if(e.target.value !== "all"){
            setRoleFilter(e.target.value as "user" | "admin");
            updateState({role: e.target.value as "user" | "admin"})
        } else {
            setRoleFilter(undefined);
            updateState({role: undefined})
        }
    }
    const handleNameFilterChange:(event: ChangeEvent<HTMLInputElement>) => void = (e:ChangeEvent<HTMLInputElement>) => {
        setNameFilter(e.target.value);
        updateState({search: e.target.value})
    }
    // -------------------

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, mt: 10, position: "relative", paddingTop: "40px" }}>
                <Button sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                }} onClick={(e)=> handleClickOpe2(undefined)}>Add new user (Stepper)</Button>
                <Button sx={{
                    position: "absolute",
                    top: 2,
                    right: 200,
                }} onClick={(e)=> setNewUserOverlayModalOpenState(true)}>Add new user (Plain form)</Button>
                <EnhancedTableToolbar numSelected={selected.length} handleRoleFilterChange={handleRoleFilterChange} roleFilter={roleFilter} handleNameFilterChange={handleNameFilterChange} nameFilter={nameFilter} handleSelectedUsersDelete={async () => await deleteSelectedItems.mutateAsync()} />
                <UserManagementTableContainer>
                    {(id) => <>
                        <Button onClick={(e)=>{
                            setUpdateUserIdState(id)
                            setUpdateUserModalOpenState(true);
                        }}>Update</Button><Button onClick={(e)=>{
                            setDeleteUserIdState(id);
                            setOpenDeleteDialogState(true);
                        }}>Delete</Button><Button onClick={(e)=>{
                          setViewUserIdState(id);
                          setViewUserModalOpenState(true);
                        }}>View</Button>
                    </>}
                </UserManagementTableContainer>
            </Paper>
            <CreateUserStepperFormDialog open={open2} handleClose={handleClose2}></CreateUserStepperFormDialog>
            <CreateUserPlainFormDialog open={newUserOverlayModalOpenState} handleClose={()=>setNewUserOverlayModalOpenState(false)}></CreateUserPlainFormDialog>
            <UpdateUserDialog open={updateUserModalOpenState} userId={updateUserIdState} handleClose={()=>setUpdateUserModalOpenState(false)}></UpdateUserDialog>
            <AlertDialog open={openDeleteDialogState} handleClose={()=>{setOpenDeleteDialogState(false)}} userId={deleteUserIdState}></AlertDialog>
            <ViewUserDialog open={viewUserModalOpenState} handleClose={()=>{setViewUserModalOpenState(false)}} userId={viewUserIdState}></ViewUserDialog>
        </Box>
    );
}

export { UsersManagementOverlayPage }