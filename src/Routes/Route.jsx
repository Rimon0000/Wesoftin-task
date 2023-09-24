import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Users from "../pages/Home/Users/Users";
import Dashboard from "../layout/Dashboard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/users",
            element: <Users></Users>
        }
      ]
    },
  ]);

export default router