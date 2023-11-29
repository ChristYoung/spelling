export const BANNED_KEYS = [
    'Enter',
    'Backspace',
    'Delete',
    'Tab',
    'CapsLock',
    'Shift',
    'Control',
    'Alt',
    'Meta',
    'Escape',
    'Fn',
    'FnLock',
    'Hyper',
    'Super',
    'OS',
    // Up, down, left and right keys
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    // volume keys
    'AudioVolumeUp',
    'AudioVolumeDown',
    'AudioVolumeMute',
    // special keys
    'End',
    'PageDown',
    'PageUp',
    'Clear',
    'Home',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
];

export default function noop(): void {}

export const isChineseSymbol = (val: string): boolean =>
    /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/.test(
        val,
    );

export const isLegal = (
    char: string,
    keyList: { bannedList: string[]; allowedList: string[] },
): boolean => {
    const { bannedList, allowedList } = keyList;
    if (bannedList.length > 0) {
        if (bannedList.includes(char)) {
            return false;
        }
        return true;
    }
    if (allowedList.length > 0) {
        if (allowedList.includes(char)) {
            return true;
        }
        return false;
    }
    return true;
};

export function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}
