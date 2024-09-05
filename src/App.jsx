import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
import Survey from "./features/survey/Survey";
import ConnectWallet from "./features/authentication/ConnectWallet";
import Therapist2 from "./features/Therapist/Therapist2";
import AppointmentDetails from "./features/payment/AppointmentDetails";

function App() {
  const [userInfo, setUserInfo] = useState(localStorage.getItem("userInfo"));

  useEffect(() => {
    // Log initial userInfo
    console.log("Initial userInfo:", userInfo);

    // Function to update state from localStorage
    const updateUserInfo = () => {
      const info = localStorage.getItem("userInfo");
      setUserInfo(info);
      console.log("Updated userInfo:", info);
    };

    // Event listener for storage changes
    window.addEventListener("storage", updateUserInfo);

    // Cleanup event listener
    return () => {
      window.removeEventListener("storage", updateUserInfo);
    };
  }, []);

  const ProtectedLayout = ({ children }) => {
    if (!userInfo) {
      return <Navigate to="/authpage" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedLayout>
          <Dashboard />
        </ProtectedLayout>
      ),
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
    {
      path: "/successfulPage",
      element: <AppointmentDetails />,
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
