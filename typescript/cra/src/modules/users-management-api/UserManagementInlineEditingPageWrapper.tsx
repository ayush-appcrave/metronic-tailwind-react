import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersManagementInlineEditingPage} from "./UsersManagementInlineEditingPage";

const UsersList = () => {
    return <UsersManagementInlineEditingPage></UsersManagementInlineEditingPage>
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
