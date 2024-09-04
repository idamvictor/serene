import { Dashboard, JoinCommunities, Rooms, Therapist, Resources, Communities, Settings, Bookings } from "./pages";

import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Survey from "./features/survey/Survey";
import Chat from "./pages/Chat";




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
      element: <Communities />,
    },
    {
      path: "/settings",
      element: <Settings />
    },
    {
      path: "/bookings",
      element: <Bookings />
    },
    // {
    //   path: "/chats",
    //   element: <Chat />
    // },
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
