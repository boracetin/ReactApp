import { createBrowserRouter, defer } from "react-router-dom";
import Login from "../Pages/Account/Login/Login";
import Register from "../Pages/Account/Register/Register";
export async function loader(permission?: string) {
   //Control of Token

  
    return defer({
    });
  }
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <h1>Welcome Page</h1>
    ),
    },
    {
        path: "/account",
        children: [
          {
            path: "login",
            element: (
                <Login />
            ),
          },
          {
            path: "register",
            element: (
                <Register />
            ),
          },
        
        
        ],
    errorElement: <></>,
    },
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
]);
