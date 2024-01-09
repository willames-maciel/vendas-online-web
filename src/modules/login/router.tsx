import { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/loginScreen';

export const LoginRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <LoginScreen />,
    },
];
