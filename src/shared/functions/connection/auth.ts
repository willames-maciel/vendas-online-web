import { AUTHORIZATOIN_KEY } from '../../constants/authorizationContants';
import { getItemStorage, removeItemStorage, setItemStorage } from './storeProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATOIN_KEY);

export const setAuthorizationToken = (token?: string) => {
    if (token) {
        setItemStorage(AUTHORIZATOIN_KEY, token);
    }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATOIN_KEY);
