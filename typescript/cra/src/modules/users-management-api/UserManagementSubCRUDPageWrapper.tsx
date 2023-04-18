import { ListViewProvider } from './core/ListViewProvider';
import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { UsersManagementSubCRUDPage } from './UsersManagementSubCRUDPage';

const UsersList = () => {
  return <UsersManagementSubCRUDPage></UsersManagementSubCRUDPage>;
};

const UsersListSubCRUDWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <UsersList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { UsersListSubCRUDWrapper };
