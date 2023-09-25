import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Users from "../pages/Home/Users/Users";
import Dashboard from "../layout/Dashboard";
import UserDetails from "../pages/Home/Users/UserDetails";

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
        },
        {
          path: "/users/:id",
          element: <UserDetails></UserDetails>,
          loader: ({params}) => {
            const id = params.Id
            const data = fetch('/data.json')
            return data
          }
        },
      ]
    },
  ]);

export default router