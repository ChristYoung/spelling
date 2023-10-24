import { configureStore } from '@reduxjs/toolkit';
import wordsReducer, { WordsListState } from './wordsReducer/wordsSlice';
import settingReducer, { SettingState } from './settingReducer/settingSlice';

export type GlobalStoreType = {
    wordsList: WordsListState;
    setting: SettingState;
};

export default configureStore({
    reducer: {
        wordsList: wordsReducer,
        setting: settingReducer,
    },
    middleware: [],
});
