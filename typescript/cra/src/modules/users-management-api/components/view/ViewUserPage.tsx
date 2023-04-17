import { ViewUser } from './ViewUser';
import { useParams } from 'react-router';

function ViewUserPage() {
  const { id } = useParams();

  return <>{id && <ViewUser userId={id}></ViewUser>}</>;
}

export { ViewUserPage };
