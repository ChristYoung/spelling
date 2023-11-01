import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import settingReducer, { SettingState } from './settingReducer/settingSlice';
import { watchWordsSaga } from './wordsReducer/wordsSaga';
import wordsReducer, { WordsListState } from './wordsReducer/wordsSlice';

export type GlobalStoreType = {
    wordsList: WordsListState;
    setting: SettingState;
};

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield fork(watchWordsSaga);
}

export default configureStore({
    reducer: {
        wordsList: wordsReducer,
        setting: settingReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
