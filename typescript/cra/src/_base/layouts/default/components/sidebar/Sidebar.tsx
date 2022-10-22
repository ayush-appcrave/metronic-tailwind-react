import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <h1>Default sidebar</h1>
      <ul>
        <li>
          <Link to="/default1">Default page 1</Link>
        </li>
        <li>
          <Link to="/default2">Default page 2</Link>
        </li>
        <li>
          <Link to="/auth1">Auth page 1</Link>
        </li>
        <li>
          <Link to="/auth2">Auth page 2</Link>
        </li>
      </ul>
    </>
  );
};

export { Sidebar };
