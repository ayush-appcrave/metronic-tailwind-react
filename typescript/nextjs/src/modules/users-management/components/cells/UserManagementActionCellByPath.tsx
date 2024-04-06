import { useRouter } from 'next/router';

import { UserManagementDrawerActionsCell } from './UserManagementDrawerActionsCell';
import { UserManagementModalOverlayActionCell } from './UserManagementModalOverlayActionCell';
import { UsersManagementActionsCell } from './UsersManagementActionsCell';

interface IUserManagementActionCellByPathProps {
  id: string;
}

function UserManagementActionCellByPath(props: IUserManagementActionCellByPathProps) {
  const location = useRouter().asPath;

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
