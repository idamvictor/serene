import { Dashboard, JoinCommunities, Rooms, Therapist, Resources, Communities } from "./pages";

import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/join-communities",
      element: <JoinCommunities />,
    },
    {
      path: "/therapist",
      element: <Therapist />,
    },
    {
      path: "/rooms",
      element: <Rooms />,
    },
    {
      path: "/resources",
      element: <Resources />,
    },
    {
      path:"/community",
      element: <Communities />
    }
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
