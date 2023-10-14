import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../pages/RootLayout';
import { Home } from '../pages/Home';

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{ path: '/', element: <Home /> }],
    },
]);

export default routerConfig;
