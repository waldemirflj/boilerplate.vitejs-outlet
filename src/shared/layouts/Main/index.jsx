import { Outlet, NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">page one</NavLink>
          </li>
          <li>
            <NavLink to="/page-two">page two</NavLink>
          </li>
        </ul>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Index;
