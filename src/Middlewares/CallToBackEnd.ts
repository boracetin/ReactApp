import axios from 'axios';
import { RemoteServiceBaseUrl } from '../AppConfiguration/ApplicationConsts';
import { getTokenFromCookie } from '../Helpers/AuthenticationHelper';

var token = getTokenFromCookie();

const api = axios.create({
    baseURL: RemoteServiceBaseUrl,
});
api.interceptors.request.use(function (config) {
    return config;
});

export const CallToBackend = async (
    ENDPOINT: string,
    HTTPMETHODTYPE: string,
    RESPOSEMODEL: any,
    REQUESTBODY?: any
): Promise<typeof RESPOSEMODEL> => {
    return await api.request({
        method: `${HTTPMETHODTYPE}`,
        url: `${ENDPOINT}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        data: REQUESTBODY,
    });
};
