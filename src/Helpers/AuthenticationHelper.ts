import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';

const cookies = new Cookies();

export const setTokenInCookie = (
    authToken?: string,
    expireDate?: Date
): void => {
    cookies.set('token', authToken, {
        path: '/',
        expires: expireDate,
    });
};

export const getTokenFromCookie = () => {
    var token = cookies.get('token');
    return token;
};

export const checkTheToken = () => {
    debugger;
    let token = getTokenFromCookie();

    if (token === undefined) {
        return false;
    }

    let decodedToken: any = jwt_decode(token);
    console.log('Decoded Token', decodedToken);
    let currentDate = new Date();
    var time = currentDate.getTime();
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < time) {
        console.log('Token expired.');

        return false;
    } else {
        console.log('Valid token');
        return true;
    }
};
