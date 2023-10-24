import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GlobalStoreType } from '..';

export type SettingState = {
    autoPlayWordPronunciation?: boolean; // 自动播放单词发音
    keyBoardFontFamily?: string;
    keyBoardSound?: boolean;
};

export const getSettingSelector = (state: GlobalStoreType) => state.setting;

export const INIT_STATE: SettingState = {
    autoPlayWordPronunciation: true,
    keyBoardSound: true,
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
