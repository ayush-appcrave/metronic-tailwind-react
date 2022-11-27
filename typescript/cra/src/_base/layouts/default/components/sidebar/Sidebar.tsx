/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAuth } from "app/setup/auth";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <>
      <h1>Default sidebar</h1>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard 1</Link>
        </li>
        <li>
          <Link to="/dashboard2">Dashboard 2</Link>
        </li>
        <li>
          <a style={{ cursor: "pointer" }} onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </>
  );
};

export { Sidebar };
