import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GlobalStoreType } from '..';

export type SettingState = {
    autoPlayWordPronunciation?: boolean; // 自动播放单词发音
    muteKeyBoardSound?: boolean; // 敲击键盘的时候不发出声音
    onlyShowExplanationWhenSpelling?: boolean; // 拼写的时候只展示中文释义
    randomOrder?: boolean; // 所选的单词随机排序
};

export const getSettingSelector = (state: GlobalStoreType) => state.setting;

export const INIT_STATE: SettingState = {
    autoPlayWordPronunciation: true,
    muteKeyBoardSound: false,
    randomOrder: true,
    onlyShowExplanationWhenSpelling: false,
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
