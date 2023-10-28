import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects';
import { FilterWordsType, WordsItem } from '../../types';
import { shuffleArray } from '../../utils';
import {
    SettingState,
    getSettingSelector,
} from '../settingReducer/settingSlice';
import { getAllWordsListInDBSelector, restWordsList } from './wordsSlice';

// actions
export const WORDS_SAGA = {
    FILTER_WORDS: 'FILTER_WORDS',
    RESET_ORIGINAL_WORDS: 'RESET_ORIGINAL_WORDS',
    RESET_WORDS: 'RESET_WORDS',
};

// TODO: filter Words by recent time.
export function* filterWordsSaga(action: PayloadAction<FilterWordsType>) {
    const originalWordsList = yield select(getAllWordsListInDBSelector);
    const { startRange, endRange, familiarFilter } = action.payload;
    const rangeWords = originalWordsList.slice(startRange, endRange);
    const filterWords = rangeWords.filter((r: WordsItem) =>
        familiarFilter === 'only_unfamiliar'
            ? !r.familiar
            : familiarFilter === 'only_familiar'
            ? r.familiar
            : true,
    );
    yield put({ type: WORDS_SAGA.RESET_WORDS, payload: filterWords});
}

export function* resetOriginalWordsSaga() {
    const originalWordsList = yield select(getAllWordsListInDBSelector);
    yield put({ type: WORDS_SAGA.RESET_WORDS, payload: originalWordsList});
}

export function* resetWordsSaga(action: PayloadAction<WordsItem[]>) {
    console.log('action',action);
    const words = action.payload;
    console.log('words',words)
    const settingConfig = yield select(getSettingSelector);
    const newRangeWords = (settingConfig as SettingState).randomOrder
        ? shuffleArray(words)
        : words;
    yield put(restWordsList(newRangeWords));
}

export function* watchWordsSaga() {
    yield takeEvery(WORDS_SAGA.FILTER_WORDS, filterWordsSaga);
    yield takeEvery(WORDS_SAGA.RESET_ORIGINAL_WORDS, resetOriginalWordsSaga);
    yield takeEvery(WORDS_SAGA.RESET_WORDS, resetWordsSaga);
}
