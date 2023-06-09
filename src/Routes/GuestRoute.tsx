import { Navigate } from 'react-router-dom';
import { checkTheToken } from '../Helpers/AuthenticationHelper';

export const GuestRoute = (props: any) => {
    const { children } = props;

    if (checkTheToken()) {
        return <Navigate to="/app/dashboard" />;
    } else {
        return children;
    }
};
