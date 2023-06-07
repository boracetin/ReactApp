import { createBrowserRouter, defer } from "react-router-dom";
import Login from "../Pages/Account/Login/Login";
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
            loader: async () => {
              return loader();
            },
          }],
    errorElement: <></>,
    },
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
]);
