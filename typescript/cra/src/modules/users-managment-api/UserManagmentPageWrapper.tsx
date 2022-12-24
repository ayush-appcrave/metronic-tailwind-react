import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersManagementPageAPI} from "./UsersManagmentPage";

const UsersList = () => {
    const {itemIdForUpdate} = useListView()
    return (
        <>
            <UsersManagementPageAPI></UsersManagementPageAPI>
        </>
    )
}

const UsersListWrapper = () => (
    <QueryRequestProvider>
        <QueryResponseProvider>
            <ListViewProvider>
                <UsersList />
            </ListViewProvider>
        </QueryResponseProvider>
    </QueryRequestProvider>
)

export {UsersListWrapper}
