import { ListViewProvider } from './core/ListViewProvider';
import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { UsersManagementOverlayPage } from './UsersManagementOverlayPage';

const UsersList = () => {
  return <UsersManagementOverlayPage></UsersManagementOverlayPage>;
};

const UsersListOverlayWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <UsersList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { UsersListOverlayWrapper };
