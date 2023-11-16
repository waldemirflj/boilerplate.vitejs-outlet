import { Outlet, NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <div>
        <p>Page option two</p>

        <div>
          <ul>
            <li>
              <NavLink to="/option-two/1">option 1</NavLink>
            </li>
            <li>
              <NavLink to="/option-two/2">option 2</NavLink>
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
