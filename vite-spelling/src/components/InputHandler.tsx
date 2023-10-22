import { useCallback, useEffect } from 'react';
import { isChineseSymbol, isLegal } from '../utils';

export interface UpdateInputFn {
    // updateInput: (updateObj: WordUpdateAction) => void;
    updateInput: (letter: string) => void;
}

export function InputHandler(props: UpdateInputFn) {
    const { updateInput } = props;
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            const char = e.key;
            if (isChineseSymbol(char)) {
                alert('您正在使用输入法，请关闭输入法。');
                return;
            }

            if (isLegal(char) && !e.altKey && !e.ctrlKey && !e.metaKey) {
                // updateInput({ type: 'add', value: char, event: e });
                updateInput(char);
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
