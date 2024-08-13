import { Dashboard, Communities, Rooms, Therapist, Resources } from "./pages";
import Layout from "./Component/Shared/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/Communities",
      element: <Communities />,
    },
    {
      path: "/Therapist",
      element: <Therapist />,
    },
    {
      path: "/Rooms",
      element: <Rooms />,
    },
    {
      path: "/Resources",
      element: <Resources />,
    },
  ]);
  //  const Layout = () => {
  //    return (
  //      <div>
  //        <NavBar />
  //        <div style={{ display: "flex" }}>
  //          <LeftBar />
  //          <Outlet />
  //          <RightBar />
  //        </div>
  //      </div>
  //    );
  //  };

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
