import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersManagementPage} from "./UsersManagementPage";

const UsersList = () => {
    return <UsersManagementPage></UsersManagementPage>
}

const UsersListInlineEditingWrapper = () => (
    <QueryRequestProvider>
        <QueryResponseProvider>
            <ListViewProvider>
                <UsersList />
            </ListViewProvider>
        </QueryResponseProvider>
    </QueryRequestProvider>
)

export {UsersListInlineEditingWrapper}
