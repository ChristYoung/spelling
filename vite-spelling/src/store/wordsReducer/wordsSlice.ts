import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WordsItem } from '../../types';
import { GlobalStoreType } from '..';

export type WordsListState = {
    words: WordsItem[];
    currentWordIndex: number;
    currentWord: WordsItem;
    currentWordId?: number;
};

export const INIT_STATE: WordsListState = {
    words: [],
    currentWordIndex: -1,
    currentWord: null,
    currentWordId: undefined,
};

export const getWordsListSelector = (state: GlobalStoreType) =>
    state.wordsList.words;

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
    },
});

export const { restWordsList } = wordsSlice.actions;
export default wordsSlice.reducer;
