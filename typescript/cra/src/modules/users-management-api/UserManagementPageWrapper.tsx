import { ListViewProvider } from './core/ListViewProvider';
import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { Route } from 'react-router-dom';
import { UsersManagementPage } from './UsersManagementPage';
import { UsersManagementOverlayPage } from './UsersManagementOverlayPage';
import { UsersManagementDrawersPage } from './UsersManagementDrawersPage';
import { UsersManagementInlineEditingPage } from './UsersManagementInlineEditingPage';
import { UsersManagementSubCRUDPage } from './UsersManagementSubCRUDPage';
import { UpdateUserPage } from './components/edit-user/UpdateUserPage';
import { ViewUserPage } from './components/view/ViewUserPage';
import { Routes } from 'react-router';

const UsersManagementWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <Routes>
          <Route path="default" element={<UsersManagementPage />} />
          <Route path="overlay-modal" element={<UsersManagementOverlayPage />} />
          <Route path="drawers" element={<UsersManagementDrawersPage />} />
          <Route path="inline-editing" element={<UsersManagementInlineEditingPage />} />
          <Route path="sub-crud" element={<UsersManagementSubCRUDPage />} />

          <Route path="edit/user/:id" element={<UpdateUserPage />} />
          <Route path="view/user/:id" element={<ViewUserPage />} />
        </Routes>
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { UsersManagementWrapper };
