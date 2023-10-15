import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../pages/RootLayout';
import { Home } from '../pages/Home';
import { InputWords } from '../pages/InputWords';

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: 'input',
                element: <InputWords />,
            },
        ],
    },
]);

export default routerConfig;
