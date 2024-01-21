import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { GlobalStoreType } from '..';

export type SettingState = {
    autoPlayWordPronunciation?: boolean; // 自动播放单词发音
    muteKeyBoardSound?: boolean; // 敲击键盘的时候不发出声音
    onlyShowExplanationWhenSpelling?: boolean; // 拼写的时候只展示中文释义
    randomOrder?: boolean; // 所选的单词随机排序
    showExample?: boolean; // 是否展示例句
    showPhonetic?: boolean; // 是否展示音标
    strictSpelling?: boolean; // 拼写过程中, 开启严格模式的话, 拼写错误不可以重新拼写, 不会被记为错误, 关闭的话, 只有略过的单词才会被记为错误
};

export const getSettingSelector = (state: GlobalStoreType) => state.setting;

export const INIT_STATE: SettingState = {
    autoPlayWordPronunciation: false,
    muteKeyBoardSound: false,
    randomOrder: false,
    onlyShowExplanationWhenSpelling: false,
    showExample: false,
    showPhonetic: false,
    strictSpelling: false,
};
export const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: INIT_STATE,
    reducers: {
        updateSetting: (
            state,
            action: PayloadAction<Partial<SettingState>>,
        ) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateSetting } = settingSlice.actions;
export default settingSlice.reducer;
