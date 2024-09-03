// import { Dashboard, JoinCommunities, Rooms, Therapist, Resources, Communities, Authentication } from "./pages";
import {
  Dashboard,
  JoinCommunities,
  Rooms,
  Resources,
  Communities,
  Payment,
  Therapists,
  Authentication,
} from "./pages";

import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate} from "react-router-dom";
import Survey from "./features/survey/Survey";
import { Toaster } from "react-hot-toast";
import ConnectWallet from "./features/authentication/ConnectWallet";
import Therapist2 from "./features/Therapist/Therapist2";

//* SOCKET IO SETUP
import { io } from "socket.io-client";
// export const socket = io("http://localhost:3000");
// export const postSocket = io("http://localhost:3000/post");
export const postSocket = io("https://serene-lbyk.onrender.com/post");



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
      path: "/community/:communityID/:communityName",
      element: <Communities />,
    },
    {
      path: "/therapist/:id",
      element: <Therapist2 />,
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
      path: "/payment/:id",
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
