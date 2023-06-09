import { createBrowserRouter, defer } from 'react-router-dom';
import Login from '../Pages/Account/Login/Login';
import Register from '../Pages/Account/Register/Register';
import { checkTheToken } from '../Helpers/AuthenticationHelper';
import { ProtectedRoute } from './ProtectedRoute';
import { Dashboard } from '../Pages/App/Home/dashboard';
import { GuestRoute } from './GuestRoute';
export async function loader(permission?: string) {
    var isAuthenticated = checkTheToken();

    if (isAuthenticated) {
    }

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
                element: (
                    <GuestRoute>
                        <Login />
                    </GuestRoute>
                ),
                loader: async () => {
                    return loader();
                },
            },
            {
                path: 'register',
                element: (
                    <GuestRoute>
                        <Register />
                    </GuestRoute>
                ),
                loader: async () => {
                    return loader();
                },
            },
        ],
        errorElement: <></>,
    },
    {
        path: '/app',
        children: [
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
                loader: async () => {
                    return loader();
                },
            },
        ],
        errorElement: <></>,
    },
    {
        path: '*',
        element: <h1>Not Found</h1>,
    },
]);
