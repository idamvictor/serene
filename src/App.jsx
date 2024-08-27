// import { Dashboard, JoinCommunities, Rooms, Therapist, Resources, Communities, Authentication } from "./pages";
import {
  Dashboard,
  JoinCommunities,
  Rooms,
  Therapist,
  Resources,
  Communities,
  Payment,
  Therapists,
  Authentication,
} from "./pages";

import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Survey from "./features/survey/Survey";
import { Toaster } from "react-hot-toast";
import ConnectWallet from "./features/authentication/ConnectWallet";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/community",
      element: <JoinCommunities />,
    },
    {
      path: "/community/:communityId",
      element: <Communities />,
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
      path: "/authpage",
      element: <Authentication />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/wallet",
      element: <ConnectWallet />,
    },
    {
      path: "/survey",
      element: <Survey />,
    },
    {
      path: "/therapists",
      element: <Therapists />,
    },
  ]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            padding: "50px",
            background: "#363636",
            color: "yellow",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "blue",
              secondary: "black",
            },
          },
        }}
      />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
