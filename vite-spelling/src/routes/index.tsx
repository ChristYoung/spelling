import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../pages/RootLayout';
import { Home } from '../pages/Home';
import { InputWords } from '../pages/InputWords';
import { ViewWords } from '../pages/ViewWords';
import { SpellWords } from '../pages/SpellWords';

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
            {
                path: 'view',
                element: <ViewWords />,
            },
            {
                path: 'spelling',
                element: <SpellWords />,
            },
        ],
    },
]);

export default routerConfig;
