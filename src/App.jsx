import {
  Dashboard,
  JoinCommunities,
  Rooms,
  Therapist,
  Resources,
  Communities,
  Authentication,
  Payment,
} from "./pages";
import ConnectWallet from "./features/authentication/ConnectWallet";

import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Survey from "./features/survey/Survey";
import { Toaster } from "react-hot-toast";


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
      path: "/community",
      element: <Communities />,
    },
    {
      path:"/authpage",
      element: <Authentication/>,
    },
    {
      path:"/wallet",
      element: <ConnectWallet/>
    },
    {
      path:"/survey",
      element:<Survey/>
    },
    {
      path:"/payment",
      element: <Payment />
    },
  ]);

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
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
