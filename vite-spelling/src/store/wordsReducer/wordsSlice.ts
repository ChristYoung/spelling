import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WordsItem } from '../../types';
import { GlobalStoreType } from '..';

export type WordsListState = {
    words: WordsItem[];
    currentWordIndex: number;
    currentWord: WordsItem;
};

export const INIT_STATE: WordsListState = {
    words: [],
    currentWordIndex: -1,
    currentWord: null,
};

export const getWordsListSelector = (state: GlobalStoreType) =>
    state.wordsList.words;
export const getCurrentWordIndexSelector = (state: GlobalStoreType) =>
    state.wordsList.currentWordIndex;
export const getCurrentWordSelector = (state: GlobalStoreType) =>
    state.wordsList.currentWord;

export const wordsSlice = createSlice({
    name: 'wordsSlice',
    initialState: INIT_STATE,
    reducers: {
        restWordsList: (
            state: WordsListState,
            action: PayloadAction<WordsItem[]>,
        ) => {
            const words = [...action.payload];
            return {
                ...state,
                words,
                currentWord: words[0],
                currentWordIndex: 0,
                currentWordId: words[0].id,
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
    updateCurrentWordProperties,
} = wordsSlice.actions;
export default wordsSlice.reducer;
