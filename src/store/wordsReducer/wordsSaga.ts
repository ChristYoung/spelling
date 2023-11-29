import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects';

import { FilterWordsType, WordsItem } from '../../types';
import { getXDaysAgoOrAfterTime, shuffleArray } from '../../utils';
import {
    SettingState,
    getSettingSelector,
} from '../settingReducer/settingSlice';
import {
    getAllWordsListInDBSelector,
    getWordsListSelector,
    resetAllWordsListInDB,
    restWordsList,
} from './wordsSlice';

// actions
export const WORDS_SAGA = {
    FILTER_WORDS: 'FILTER_WORDS',
    RESET_ORIGINAL_WORDS: 'RESET_ORIGINAL_WORDS', // 重置为数据库中的words list
    RESET_WORDS: 'RESET_WORDS', // 设置words list
    RESET_WORDS_ORDER: 'RESET_WORDS_ORDER', // 重置单词排序
    CLEAR_WORDS: 'CLEAR_WORDS', // 清空数据库中所有的单词
};

export function* filterWordsSaga(action: PayloadAction<FilterWordsType>) {
    const originalWordsList = yield select(getAllWordsListInDBSelector);
    const { startRange, endRange, familiarFilter, timeFilter, resetOriginal } =
        action.payload;

    // reset all words
    if (resetOriginal) {
        yield put({ type: WORDS_SAGA.RESET_ORIGINAL_WORDS });
        return;
    }

    // 0. filter by range.
    const rangeWords = originalWordsList.slice(startRange, endRange);

    // 1. filter by word's status.
    const filterWords = rangeWords.filter((r: WordsItem) =>
        familiarFilter === 'only_unfamiliar'
            ? !r.familiar
            : familiarFilter === 'only_familiar'
            ? r.familiar
            : true,
    );

    // 2. filter by recent time.
    const filterWordByTime = (filterWords as WordsItem[]).filter(
        w => w.created_timestamp >= getXDaysAgoOrAfterTime(timeFilter),
    );
    yield put({ type: WORDS_SAGA.RESET_WORDS, payload: filterWordByTime });
}

export function* resetOriginalWordsSaga() {
    const originalWordsList = yield select(getAllWordsListInDBSelector);
    yield put({ type: WORDS_SAGA.RESET_WORDS, payload: originalWordsList });
}

export function* resetWordsSaga(action: PayloadAction<WordsItem[]>) {
    const words = action.payload;
    const settingConfig = yield select(getSettingSelector);
    const newRangeWords = (settingConfig as SettingState).randomOrder
        ? shuffleArray(words)
        : words;
    yield put(restWordsList(newRangeWords));
}

export function* changeWordsOrderSaga(
    action: PayloadAction<{ orderType: 'RANDOM' | 'ASCENDING' }>,
) {
    const words = yield select(getWordsListSelector);
    const orderType = action.payload.orderType;
    // we need to use [...words] to sort in order to avoid `TypeError: Cannot assign to read only property '0' of object '[object Array]' in typescript` error.
    const newRangeWords =
        orderType === 'RANDOM'
            ? shuffleArray(words)
            : [...words].sort((a, b) => a.id - b.id);
    yield put(restWordsList(newRangeWords));
}

export function* clearAllWordsSaga() {
    yield put({ type: WORDS_SAGA.RESET_WORDS, payload: [] });
    yield put(resetAllWordsListInDB([]));
}

export function* watchWordsSaga() {
    yield takeEvery(WORDS_SAGA.FILTER_WORDS, filterWordsSaga);
    yield takeEvery(WORDS_SAGA.RESET_ORIGINAL_WORDS, resetOriginalWordsSaga);
    yield takeEvery(WORDS_SAGA.RESET_WORDS, resetWordsSaga);
    yield takeEvery(WORDS_SAGA.RESET_WORDS_ORDER, changeWordsOrderSaga);
    yield takeEvery(WORDS_SAGA.CLEAR_WORDS, clearAllWordsSaga);
}
