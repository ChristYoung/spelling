import { configureStore } from '@reduxjs/toolkit';
import wordsReducer, { WordsListState } from './wordsReducer/wordsSlice';
import settingReducer, { SettingState } from './settingReducer/settingSlice';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { watchWordsSaga } from './wordsReducer/wordsSaga';

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
