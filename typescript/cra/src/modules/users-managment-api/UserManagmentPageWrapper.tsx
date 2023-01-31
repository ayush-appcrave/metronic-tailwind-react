import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersManagementPage} from "./UsersManagmentPage";
import {Alert} from "@mui/material";

const UsersList = () => {
    return <UsersManagementPage></UsersManagementPage>
}

const UsersListWrapper = () => (
    <QueryRequestProvider>
        <QueryResponseProvider>
            <ListViewProvider>
                {/*<Alert sx={{*/}
                {/*    position: "absolute",*/}
                {/*    top: 5,*/}
                {/*    right:5,*/}
                {/*    zIndex: 999,*/}
                {/*}} severity="error">This is an error alert — check it out!</Alert>*/}
                {/*<Alert sx={{*/}
                {/*    position: "absolute",*/}
                {/*    top: 70,*/}
                {/*    right:5,*/}
                {/*    zIndex: 999,*/}
                {/*}} severity="error">This is an error alert — check it out!</Alert>*/}
                {/*<Alert sx={{*/}
                {/*    position: "absolute",*/}
                {/*    top: 150,*/}
                {/*    right:5,*/}
                {/*    zIndex: 999,*/}
                {/*}} severity="error">This is an error alert — check it out!</Alert>*/}
                <UsersList />
            </ListViewProvider>
        </QueryResponseProvider>
    </QueryRequestProvider>
)

export {UsersListWrapper}
