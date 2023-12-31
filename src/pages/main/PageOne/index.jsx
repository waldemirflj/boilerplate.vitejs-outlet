import { Outlet, NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <div>
        <p>Page one</p>

        <div>
          <ul>
            <li>
              <NavLink to="/">option 1</NavLink>
            </li>
            <li>
              <NavLink to="/option-two">option 2</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Index;
