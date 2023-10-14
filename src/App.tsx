import './App.css';
import routerConfig from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
    return <RouterProvider router={routerConfig}></RouterProvider>;
}

export default App;
