import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersManagementDrawersPage} from "./UsersManagementDrawersPage";

const UsersList = () => {
    return <UsersManagementDrawersPage></UsersManagementDrawersPage>
}

const UsersListDrawersWrapper = () => (
    <QueryRequestProvider>
        <QueryResponseProvider>
            <ListViewProvider>
                <UsersList />
            </ListViewProvider>
        </QueryResponseProvider>
    </QueryRequestProvider>
)

export {UsersListDrawersWrapper}
