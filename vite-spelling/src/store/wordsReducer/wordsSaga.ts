import { PayloadAction, createAction } from '@reduxjs/toolkit';
import { select, put, takeEvery } from 'redux-saga/effects';
import { FilterWordsType, WordsItem } from '../../types';
import { getAllWordsListInDBSelector, restWordsList } from './wordsSlice';

// actions
export const WORDS_SAGA = {
    FILTER_WORDS: 'FILTER_WORDS',
    RESET_ORIGINAL_WORDS: 'RESET_ORIGINAL_WORDS',
};

export const filterWords = createAction(
    WORDS_SAGA.FILTER_WORDS,
    (f: FilterWordsType) => ({ payload: f }),
);

// TODO: filter Words by recent time.
export function* filterWordsSaga(action: PayloadAction<FilterWordsType>) {
    const originalWordsList = yield select(getAllWordsListInDBSelector);
    const { startRange, endRange, familiarFilter } = action.payload;
    const rangeWords = originalWordsList.slice(startRange, endRange);
    const newRangeWords = rangeWords.filter((r: WordsItem) =>
        familiarFilter === 'only_unfamiliar'
            ? !r.familiar
            : familiarFilter === 'only_familiar'
            ? r.familiar
            : true,
    );
    yield put(restWordsList(newRangeWords));
}

export function* resetOriginalWordsSaga() {
    const originalWordsList = yield select(getAllWordsListInDBSelector);
    yield put(restWordsList(originalWordsList));
}

export function* watchWordsSaga() {
    yield takeEvery(WORDS_SAGA.FILTER_WORDS, filterWordsSaga);
    yield takeEvery(WORDS_SAGA.RESET_ORIGINAL_WORDS, resetOriginalWordsSaga);
}
