import Cookies from 'universal-cookie';

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
