import useSound from 'use-sound';

export const SOUND_RESOURCES_PREFIX = '/vite-spelling/sounds/';
export const WRONG_SOUND = 'beep.wav';
export const CORRECT_SOUND = 'correct.wav';
export const TYPING_SOUND = 'Cherry MX Blacks.mp3';
export const VOLUME = 2;
export type PlayFunction = ReturnType<typeof useSound>[0];

export function useKeySound(): [PlayFunction, PlayFunction, PlayFunction] {
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
    return [playTypingSound, playWrongSound, playCorrectSound];
}
