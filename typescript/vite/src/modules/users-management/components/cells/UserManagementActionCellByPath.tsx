import {
  UserManagementDrawerActionsCell,
  UserManagementModalOverlayActionCell,
  UsersManagementActionsCell
} from 'modules/users-management';
import { useLocation } from 'react-router';

interface IUserManagementActionCellByPathProps {
  id: string;
}

function UserManagementActionCellByPath(props: IUserManagementActionCellByPathProps) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/users-management/overlay-modal' && (
        <UserManagementModalOverlayActionCell id={props.id} />
      )}
      {location.pathname === '/users-management/drawers' && (
        <UserManagementDrawerActionsCell id={props.id} />
      )}
      {location.pathname === '/users-management/default' && (
        <UsersManagementActionsCell id={props.id} />
      )}
    </>
  );
}

export { UserManagementActionCellByPath };
