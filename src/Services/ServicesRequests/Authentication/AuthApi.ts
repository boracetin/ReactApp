import { setTokenInCookie } from '../../../Helpers/AuthenticationHelper';
import { CallToBackend } from '../../../Middlewares/CallToBackEnd';
import { LoginOuputModel } from '../../Models/AuthModels/LoginModel';

export const AuthAPI = {
    login: async (body: any) => {
        return await CallToBackend(
            'api/Authentication/Login',
            'POST',
            typeof new LoginOuputModel(),
            body
        ).then((res) => {
            var tokenExpireDate = new Date(
                new Date().getTime() + 1000 * res.data.expiration
            );
            setTokenInCookie(res.data.token, tokenExpireDate);
            return res.data.result;
        });
    },
};
