const bannedKeys = [
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
];

export default function noop(): void {}

export const isChineseSymbol = (val: string): boolean =>
    /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/.test(
        val,
    );

export const isLegal = (char: string): boolean => {
    if (bannedKeys.includes(char)) return false;
    return true;
};
