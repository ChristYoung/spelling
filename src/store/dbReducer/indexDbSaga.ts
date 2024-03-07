import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects';

export const IndexDbSaga = {
    SET_DB_WORDS: 'SET_DB_WORDS',
    CLEAR_DB_WORDS: 'CLEAR_DB_WORDS',
};

export function* watchIndexDbSaga() {
    yield takeEvery(IndexDbSaga.SET_DB_WORDS);
}
