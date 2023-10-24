import './App.css';
import routerConfig from './routes';
import { RouterProvider } from 'react-router-dom';
import { initDB, useIndexedDB } from 'react-indexed-db-hook';
import { IndexedDB } from 'react-indexed-db-hook';
import { DBConfig } from './DB/db.config';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DB_WORDS_TABLE_NAME } from './DB/db.enum';
import { restWordsList } from './store/wordsReducer/wordsSlice';

initDB(DBConfig);

function App() {
    const { getAll } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const dispatch = useDispatch();
    useEffect(() => {
        getAll().then(wordsFromDB => dispatch(restWordsList(wordsFromDB)));
    }, [dispatch, getAll]);

    return (
        <IndexedDB {...DBConfig}>
            <RouterProvider router={routerConfig}></RouterProvider>
        </IndexedDB>
    );
}

export default App;
