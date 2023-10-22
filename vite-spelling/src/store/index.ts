import { configureStore } from '@reduxjs/toolkit';
import wordsReducer, { WordsListState } from './wordsReducer/wordsSlice';

export type GlobalStoreType = {
    wordsList: WordsListState;
};

export default configureStore({
    reducer: {
        wordsList: wordsReducer,
    },
    middleware: [],
});
