import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { LoginRoutes } from './modules/login/router';
import { useNotification } from './shared/components/hooks/useNotificaton';
const mainRoutes: RouteObject[] = [
    {
        path: '/',
        element: <div>Tela Principal</div>,
        errorElement: <div>404 - Not Found</div>,
    },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...LoginRoutes]);

function App() {
    const { contextHolder } = useNotification();
    return (
        <>
            {contextHolder}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
