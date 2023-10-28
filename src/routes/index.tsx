import { createHashRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { InputWords } from '../pages/InputWords';
import { RootLayout } from '../pages/RootLayout';
import { SpellWords } from '../pages/SpellWords';
import { ViewWords } from '../pages/ViewWords';

const routerConfig = createHashRouter([
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
                path: 'spellWords',
                element: <SpellWords />,
            },
        ],
    },
]);

export default routerConfig;
