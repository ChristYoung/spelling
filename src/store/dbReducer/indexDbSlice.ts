import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { WordsListState } from '../wordsReducer/wordsSlice';

export type IndexDBWordsListState = Pick<WordsListState, 'words'>;
const INIT_STATE: IndexDBWordsListState = {
    words: [],
};

const indexDbSlice = createSlice({
    name: 'indexDbSlice',
    initialState: INIT_STATE,
    reducers: {},
});

export const {} = indexDbSlice.actions;
export default indexDbSlice.reducer;
