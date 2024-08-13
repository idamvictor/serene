import { Dashboard, Communities, Rooms, Therapist, Resources } from "./pages";
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

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
