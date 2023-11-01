import { useEffect } from 'react';
import { initDB, useIndexedDB } from 'react-indexed-db-hook';
import { IndexedDB } from 'react-indexed-db-hook';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { DBConfig } from './DB/db.config';
import { DB_WORDS_TABLE_NAME } from './DB/db.enum';
import routerConfig from './routes';
import { WORDS_SAGA } from './store/wordsReducer/wordsSaga';
import { resetAllWordsListInDB } from './store/wordsReducer/wordsSlice';

initDB(DBConfig);

function App() {
    const { getAll } = useIndexedDB(DB_WORDS_TABLE_NAME.WORDS);
    const dispatch = useDispatch();
    useEffect(() => {
        getAll().then(wordsFromDB => {
            dispatch(resetAllWordsListInDB(wordsFromDB));
            dispatch({ type: WORDS_SAGA.RESET_WORDS, payload: wordsFromDB });
        });
    }, [dispatch, getAll]);

    return (
        <IndexedDB {...DBConfig}>
            <RouterProvider router={routerConfig}></RouterProvider>
        </IndexedDB>
    );
}

export default App;
