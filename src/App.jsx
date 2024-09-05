import {
  Dashboard,
  JoinCommunities,
  Rooms,
  Resources,
  Communities,
  Payment,
  Therapists,
  Authentication,
  ChatPage,
  ErrorPage,
  Settings,
  Bookings
} from "./pages";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Survey from "./features/survey/Survey";
import Chat from "./pages/Chat";
import { Toaster } from "react-hot-toast";
import ConnectWallet from "./features/authentication/ConnectWallet";
import Therapist2 from "./features/Therapist/Therapist2";

//* SOCKET IO SETUP
// import { io } from "socket.io-client";
// export const postSocket = io("http://localhost:3000/post");
// export const postSocket = io("https://serene-lbyk.onrender.com/post");



function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
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
    {
      path: "/wallet",
      element: <ConnectWallet />
    },
    {
      path: "/survey",
      element: <Survey />,
    },
    {
      path: "/therapists",
      element: <Therapists />,
    }, 
    {
      path: "/chat",
      element: <ChatPage />,
    },  
  ]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            padding: "50px",
            background: "#363636",
            color: "yellow",
          },
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
