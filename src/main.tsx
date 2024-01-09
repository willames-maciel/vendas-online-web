import './main.css';

import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { LoginRoutes } from './modules/login/router';

const mainRoutes: RouteObject[] = [
    {
        path: '/',
        element: <div>Tela Principal</div>,
        errorElement: <div>404 - Not Found</div>,
    },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...LoginRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
