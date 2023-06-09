import { createBrowserRouter, defer } from 'react-router-dom';
import Login from '../Pages/Account/Login/Login';
import Register from '../Pages/Account/Register/Register';
import { checkTheToken } from '../Helpers/AuthenticationHelper';
import { ProtectedRoute } from './ProtectedRoute';
export async function loader(permission?: string) {
    var isAuthenticated = checkTheToken();
    return defer({ isAuthenticated });
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Welcome Page</h1>,
    },
    {
        path: '/account',
        children: [
            {
                path: 'login',
                element: <Login />,
                loader: async () => {
                    return loader();
                },
            },
            {
                path: 'register',
                element: (
                    <ProtectedRoute>
                        <Register />
                    </ProtectedRoute>
                ),
            },
        ],
        errorElement: <></>,
    },
    {
        path: '*',
        element: <h1>Not Found</h1>,
    },
]);
