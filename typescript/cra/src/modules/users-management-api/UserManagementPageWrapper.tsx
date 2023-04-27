import { ListViewProvider } from './core/ListViewProvider';
import { QueryRequestProvider } from './core/QueryRequestProvider';
import { QueryResponseProvider } from './core/QueryResponseProvider';
import { Route } from 'react-router-dom';
import {
  UpdateUserPage,
  UsersManagementPage,
  UsersManagementOverlayPage,
  UsersManagementDrawersPage,
  UsersManagementInlineEditingPage,
  UsersManagementSubCRUDPage,
  UsersManagementSkeletonPage,
  ViewUserPage
} from './pages';
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
          <Route path="skeleton" element={<UsersManagementSkeletonPage />} />

          <Route path="edit/user/:id" element={<UpdateUserPage />} />
          <Route path="view/user/:id" element={<ViewUserPage />} />
        </Routes>
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { UsersManagementWrapper };
