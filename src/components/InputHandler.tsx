import { useCallback, useEffect } from 'react';

import { isChineseSymbol, isLegal } from '../utils';

export interface UpdateInputFn {
    updateInput: (letter: { key: string; code?: string }) => void;
    keyList: { bannedList: string[]; allowedList: string[] };
}

export function InputHandler(props: UpdateInputFn) {
    const { updateInput } = props;
    const { bannedList, allowedList } = props.keyList;
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            const { key, code } = e;
            if (isChineseSymbol(key)) {
                alert('您正在使用输入法，请关闭输入法。');
                return;
            }

            if (
                isLegal(key, { bannedList, allowedList }) &&
                !e.altKey &&
                !e.ctrlKey &&
                !e.metaKey
            ) {
                updateInput({ key, code });
            }
        },
        [updateInput],
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
    return <></>;
}
