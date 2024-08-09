import { Dashboard } from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
function App() {

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
      <Dashboard/>
    </>
  );
}

export default App
