import { Navigate } from 'react-router-dom';
import { checkTheToken } from '../Helpers/AuthenticationHelper';

export const ProtectedRoute = (props: any) => {
    const { children } = props;
    debugger;

    if (checkTheToken()) {
        return children;
    } else {
        return <Navigate to="/account/login" />;
    }
};
