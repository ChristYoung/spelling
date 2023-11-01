import { createHashRouter } from 'react-router-dom';
import { Governance } from '../pages/Governance';
import { Home } from '../pages/Home';
import { InputWords } from '../pages/InputWords';
import { RootLayout } from '../pages/RootLayout';
import { SpellWords } from '../pages/SpellWords';
import { ViewWords } from '../pages/ViewWords';
import { WalkThrough } from '../pages/WalkThrough';

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
            {
                path: 'walk',
                element: <WalkThrough />,
            },
            {
                path: 'governance',
                element: <Governance />,
            },
        ],
    },
]);

export default routerConfig;
