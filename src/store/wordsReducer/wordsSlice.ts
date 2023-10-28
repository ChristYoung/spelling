import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WordsItem } from '../../types';
import { GlobalStoreType } from '..';

export type WordsListState = {
    words: WordsItem[];
    allWordsInDB?: WordsItem[];
    currentWordIndex: number;
    currentWord: WordsItem;
};

export const INIT_STATE: WordsListState = {
    words: [],
    allWordsInDB: [],
    currentWordIndex: -1,
    currentWord: null,
};

export const getAllWordsInDB = (state: GlobalStoreType) => 
    state.wordsList.allWordsInDB; 
export const getWordsListSelector = (state: GlobalStoreType) =>
    state.wordsList.words;
export const getAllWordsListInDBSelector = (state: GlobalStoreType) =>
    state.wordsList.allWordsInDB;
export const getCurrentWordIndexSelector = (state: GlobalStoreType) =>
    state.wordsList.currentWordIndex;
export const getCurrentWordSelector = (state: GlobalStoreType) =>
    state.wordsList.currentWord;

export const wordsSlice = createSlice({
    name: 'wordsSlice',
    initialState: INIT_STATE,
    reducers: {
        resetAllWordsListInDB: (state, action: PayloadAction<WordsItem[]>) => {
            const words = [...action.payload];
            return {
                ...state,
                allWordsInDB: words,
            };
        },
        restWordsList: (
            state: WordsListState,
            action: PayloadAction<WordsItem[]>,
        ) => {
            const words = [...action.payload];
            return {
                ...state,
                words,
                currentWord: words?.length > 0 ? words[0] : null,
                currentWordIndex: words?.length > 0 ? 0 : -1,
                currentWordId: words?.length > 0 ? words[0].id : null,
            };
        },
        changeCurrentWordByIndex: (
            state: WordsListState,
            action: PayloadAction<number>,
        ) => {
            const newCurrentWordIndex = action.payload;
            const newCurrentWord = state.words[newCurrentWordIndex]
                ? state.words[newCurrentWordIndex]
                : state.currentWord;
            return {
                ...state,
                currentWordIndex: newCurrentWordIndex,
                currentWord: newCurrentWord,
            };
        },
        updateCurrentWordProperties: (
            state: WordsListState,
            action: PayloadAction<WordsItem>,
        ) => {
            return { ...state, currentWord: action.payload };
        },
    },
});

export const {
    restWordsList,
    changeCurrentWordByIndex,
    resetAllWordsListInDB,
    updateCurrentWordProperties,
} = wordsSlice.actions;
export default wordsSlice.reducer;
