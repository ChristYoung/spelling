import { useSelector } from 'react-redux';
import useSound from 'use-sound';

import {
    SettingState,
    getSettingSelector,
} from '../store/settingReducer/settingSlice';
import noop from '../utils/noop.util';

export const SOUND_RESOURCES_PREFIX = '/sounds/';
export const WRONG_SOUND = 'beep.wav';
export const CORRECT_SOUND = 'correct.wav';
export const TYPING_SOUND = 'Cherry MX Blacks.mp3';
export const VOLUME = 30;
export type PlayFunction = ReturnType<typeof useSound>[0];

export function useKeySound(): [PlayFunction, PlayFunction, PlayFunction] {
    const settingConfig: SettingState = useSelector(getSettingSelector);
    const [playTypingSound] = useSound(
        `${SOUND_RESOURCES_PREFIX}${TYPING_SOUND}`,
        {
            volume: VOLUME,
            interrupt: true,
        },
    );
    const [playWrongSound] = useSound(
        `${SOUND_RESOURCES_PREFIX}${WRONG_SOUND}`,
        {
            volume: VOLUME,
            interrupt: true,
        },
    );
    const [playCorrectSound] = useSound(
        `${SOUND_RESOURCES_PREFIX}${CORRECT_SOUND}`,
        {
            volume: VOLUME,
            interrupt: true,
        },
    );
    return settingConfig.muteKeyBoardSound
        ? [noop, noop, noop]
        : [playTypingSound, playWrongSound, playCorrectSound];
}
