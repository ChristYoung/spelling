import './App.css';
import routerConfig from './routes';
import { RouterProvider } from 'react-router-dom';
import { initDB } from 'react-indexed-db-hook';
import { IndexedDB } from 'react-indexed-db-hook';
import { DBConfig } from './DB/db.config';

initDB(DBConfig);

function App() {
    return (
        <IndexedDB {...DBConfig}>
            <RouterProvider router={routerConfig}></RouterProvider>
        </IndexedDB>
    );
}

export default App;
